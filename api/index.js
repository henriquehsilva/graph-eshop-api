const { ApolloServer } = require('apollo-server')
const productSchema = require('./product/schema/product.graphql')
const productResolvers = require('./product/resolvers/productResolvers')
const ProductsAPI = require('./product/datasource/product')

const typeDefs = [productSchema]
const resolvers = [productResolvers]

const server = new ApolloServer( { 
    typeDefs, 
    resolvers,
    dataSources: () => {
        return {
           productsAPI: new ProductsAPI() 
        }
    }
} )

server.listen().then(({url}) => {
    console.log(`Servidor rodando na porta ${url}`)
})
