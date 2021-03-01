
const productResolvers = {
    Query: {
        products: (root, args, { dataSources }, info) => dataSources.
        productsAPI.getProducts()
    }
}

module.exports = productResolvers