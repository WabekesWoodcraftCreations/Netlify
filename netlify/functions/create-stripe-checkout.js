const Stripe = require("stripe");
const { headers, json, orderDescription, parseBody, requireOrder, siteUrl } = require("./checkout-utils");

exports.handler = async (event) => {
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers };
  }

  if (event.httpMethod !== "POST") {
    return json(405, { error: "Method not allowed." });
  }

  if (!process.env.STRIPE_SECRET_KEY) {
    return json(500, { error: "Stripe is not configured. Add STRIPE_SECRET_KEY in Netlify environment variables." });
  }

  try {
    const { order } = parseBody(event);
    const safeOrder = requireOrder(order);
    const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
    const baseUrl = siteUrl(event);

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      customer_email: safeOrder.customer?.email || undefined,
      phone_number_collection: { enabled: true },
      line_items: safeOrder.items.map((item) => ({
        quantity: item.quantity,
        price_data: {
          currency: "usd",
          unit_amount: Math.round(item.unitPrice * 100),
          product_data: {
            name: item.product,
            description: item.options?.length
              ? item.options.map((option) => `${option.label}: ${option.value}`).join(", ").slice(0, 1000)
              : undefined,
            images: item.image ? [item.image] : undefined
          }
        }
      })),
      metadata: {
        orderId: safeOrder.id,
        customerName: safeOrder.customer?.name || "",
        customerPhone: safeOrder.customer?.phone || "",
        fulfillment: safeOrder.customer?.method || "",
        address: (safeOrder.customer?.address || "").slice(0, 500),
        notes: (safeOrder.customer?.notes || "").slice(0, 500),
        orderSummary: orderDescription(safeOrder)
      },
      success_url: `${baseUrl}/?payment=stripe-success&session_id={CHECKOUT_SESSION_ID}#custom`,
      cancel_url: `${baseUrl}/?payment=cancel#custom`
    });

    return json(200, { url: session.url });
  } catch (error) {
    return json(500, { error: error.message || "Stripe checkout failed." });
  }
};
