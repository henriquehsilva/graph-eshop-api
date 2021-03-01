const { RESTDataSource } = require('apollo-datasource-rest')

class ProductsAPI extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = 'http://localhost:3000'
    }

    async getProducts() {
        const products = await this.get('/products')
        return products.map(async product => ({
           id: product.id,
           title: product.title,
           image: product.image,
           price: product.price,
           details: product.details 
        }))
    }
}

module.exports = ProductsAPI