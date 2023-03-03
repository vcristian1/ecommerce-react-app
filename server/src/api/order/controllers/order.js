'use strict';
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

/**
 * order controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order.order', ({ strapi }) => ({
    async create(ctx) {
        const { products, userName, email } = ctx.request.body

        try {
            //retrieve item info first
            const lineItems = await Promise.all(
                produce.map(async (product) => {
                // Grabbing the item then returning an object that has price and quantity data
                  const item = await strapi
                    .service("api::item.item")
                    .findOne(prodct.id);
                    
                    return {
                    // Structure comes from Stripe documentation. Prebuilt Checkout
                    // lineItems represents the list of objects created below
                      price_data: {
                        currency: "usd",
                        product_data: {
                            name: item.name
                        },
                        unit_amount: item.price * 100
                      },
                      quantity: product.count,
                  }
                })
            );
            // create stripe session
            const session = await stripe.checkout.sessions.create({
                payment_method_types: ["card"],
                customer_email: email,
                mode: "payment",
                success_url: "http://localhost:3000/checkout/success",
                cancel_url: "http:locahost:3000",
                // lineItems represents the list of objects created below
                line_items: lineItems
            });

            // create the item in our backend automatically
            await strapi.service("api::order.order").create({
                data: { userName, products, stripeSessionId: session.id },
            });

            // return the session id
            return { id: session.id } 
        }  catch (error) {
            ctx.response.status = 500;
            return { error: { message: "There was a problem creating the charge." } };
        }
    },
}));
