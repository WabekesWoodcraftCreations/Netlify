# Wabekes Payment Setup

This site is ready for real checkout through Netlify Functions.

## Required Netlify Environment Variables

Add these in Netlify:

- `STRIPE_SECRET_KEY`
- `PAYPAL_CLIENT_ID`
- `PAYPAL_CLIENT_SECRET`

Optional for PayPal sandbox testing:

- `PAYPAL_API_BASE=https://api-m.sandbox.paypal.com`

For live PayPal, leave `PAYPAL_API_BASE` blank or use:

- `PAYPAL_API_BASE=https://api-m.paypal.com`

## Stripe

Cards, Apple Pay, and Google Pay all use Stripe Checkout.

In Stripe:

1. Enable payment methods in the Stripe Dashboard.
2. Register your Netlify domain for Apple Pay.
3. Make sure the site is served over HTTPS.

Apple Pay and Google Pay only show on eligible devices and browsers.

## PayPal

PayPal uses the PayPal Orders API:

1. Create PayPal REST app credentials.
2. Add the client ID and secret to Netlify.
3. Use sandbox credentials for testing, then live credentials for the real site.

## Important

Do not put secret keys in `script.js` or `index.html`. Secret keys belong only in Netlify environment variables.
