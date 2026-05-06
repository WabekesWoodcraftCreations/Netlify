const { headers, json, orderDescription, parseBody, requireOrder, siteUrl } = require("./checkout-utils");

const paypalBaseUrl = () => process.env.PAYPAL_API_BASE || "https://api-m.paypal.com";

const getAccessToken = async () => {
  const clientId = process.env.PAYPAL_CLIENT_ID;
  const secret = process.env.PAYPAL_CLIENT_SECRET;

  if (!clientId || !secret) {
    throw new Error("PayPal is not configured. Add PAYPAL_CLIENT_ID and PAYPAL_CLIENT_SECRET in Netlify environment variables.");
  }

  const response = await fetch(`${paypalBaseUrl()}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(`${clientId}:${secret}`).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: "grant_type=client_credentials"
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error_description || "Could not connect to PayPal.");
  }

  return data.access_token;
};

exports.handler = async (event) => {
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers };
  }

  if (event.httpMethod !== "POST") {
    return json(405, { error: "Method not allowed." });
  }

  try {
    const { order } = parseBody(event);
    const safeOrder = requireOrder(order);
    const baseUrl = siteUrl(event);
    const accessToken = await getAccessToken();

    const response = await fetch(`${paypalBaseUrl()}/v2/checkout/orders`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        intent: "CAPTURE",
        purchase_units: [{
          reference_id: safeOrder.id,
          description: orderDescription(safeOrder).slice(0, 127),
          amount: {
            currency_code: "USD",
            value: safeOrder.total.toFixed(2)
          }
        }],
        payment_source: {
          paypal: {
            experience_context: {
              brand_name: "Wabekes Woodcraft Creations",
              shipping_preference: safeOrder.customer?.method === "Ship my order" ? "GET_FROM_FILE" : "NO_SHIPPING",
              user_action: "PAY_NOW",
              return_url: `${baseUrl}/?payment=paypal-success#custom`,
              cancel_url: `${baseUrl}/?payment=cancel#custom`
            }
          }
        }
      })
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "PayPal checkout failed.");
    }

    const approveLink = data.links?.find((link) => link.rel === "payer-action" || link.rel === "approve");
    if (!approveLink) {
      throw new Error("PayPal did not return an approval link.");
    }

    return json(200, { url: approveLink.href });
  } catch (error) {
    return json(500, { error: error.message || "PayPal checkout failed." });
  }
};
