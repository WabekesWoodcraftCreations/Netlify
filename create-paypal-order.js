const { headers, json, parseBody } = require("./checkout-utils");

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
    const { orderID } = parseBody(event);
    if (!orderID) {
      throw new Error("Missing PayPal order ID.");
    }

    const accessToken = await getAccessToken();
    const response = await fetch(`${paypalBaseUrl()}/v2/checkout/orders/${orderID}/capture`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json"
      }
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "PayPal capture failed.");
    }

    return json(200, { status: data.status, id: data.id });
  } catch (error) {
    return json(500, { error: error.message || "PayPal capture failed." });
  }
};
