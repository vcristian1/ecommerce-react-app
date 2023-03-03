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
            )
        } catch (error) {

        }
    }
}));
