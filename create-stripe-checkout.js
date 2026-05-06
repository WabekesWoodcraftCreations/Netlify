const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS"
};

const json = (statusCode, body) => ({
  statusCode,
  headers,
  body: JSON.stringify(body)
});

const parseBody = (event) => {
  if (!event.body) {
    return {};
  }

  return JSON.parse(event.body);
};

const allowedPrices = {
  "Personalized Ornaments": [6, 10],
  "Classic Ornaments": [6, 10],
  "Mug Tree Holders": [28.5],
  "Custom Photo Frame": [55],
  "Layered Wooden Designs": [15],
  "Emoji Earrings": [6, 10],
  "Heart Earrings": [6, 10],
  "Animal Earrings": [6, 10],
  "Misc. Earrings": [6, 10],
  "Food Earrings": [6, 10],
  "Lily Earrings": [6, 10],
  "Tulip Earings": [6, 10],
  "Heirloom Rocking Horse": [700, 750, 900],
  "Daisy Earings": [6, 10],
  "Rose Earings": [6, 10],
  "Folded Flag": [7],
  "Custom Canvas Art": [32],
  "Wavy Flag": [105, 110, 165, 170, 450, 455],
  "Standard American Flag": [70, 75, 150, 155, 300, 305],
  "Premium Metal Business Cards": [44, 67.6, 85.8, 103.2, 116, 134],
  "Better with Dogs": [15],
  "Scripture Wall Hanging": [20.5],
  "Pledge of Allegiance Board": [16.2],
  "Nativity Silhuette": [9.45],
  "Magnets": [2, 5]
};

const sameMoney = (a, b) => Math.round(Number(a) * 100) === Math.round(Number(b) * 100);

const orderDescription = (order) => order.items
  .map((item) => {
    const options = item.options?.length
      ? ` (${item.options.map((option) => `${option.label}: ${option.value}`).join(", ")})`
      : "";
    return `${item.quantity} x ${item.product}${options}`;
  })
  .join("; ")
  .slice(0, 1200);

const requireOrder = (order) => {
  if (!order || !Array.isArray(order.items) || !order.items.length) {
    throw new Error("Order is empty.");
  }

  const total = Number(order.total);
  if (!Number.isFinite(total) || total <= 0) {
    throw new Error("Order total is invalid.");
  }

  const items = order.items.map((item) => {
    const quantity = Math.max(1, Number(item.quantity) || 1);
    const unitPrice = Number(item.unitPrice) || 0;
    const prices = allowedPrices[item.product];

    if (!prices || !prices.some((price) => sameMoney(price, unitPrice))) {
      throw new Error(`Invalid price for ${item.product}.`);
    }

    return {
      ...item,
      quantity,
      unitPrice
    };
  });

  const calculatedTotal = items.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0);
  if (!sameMoney(calculatedTotal, total)) {
    throw new Error("Order total does not match item prices.");
  }

  return {
    ...order,
    total,
    items
  };
};

const siteUrl = (event) => {
  const configured = process.env.URL || process.env.DEPLOY_PRIME_URL;
  if (configured) {
    return configured.replace(/\/$/, "");
  }

  return `https://${event.headers.host}`;
};

module.exports = {
  headers,
  json,
  orderDescription,
  parseBody,
  requireOrder,
  siteUrl
};
