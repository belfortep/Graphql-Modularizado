import { ApolloServer } from 'apollo-server'
import { typeDefs, resolvers } from './schema.js'



async function startApollo() {
    const server = new ApolloServer({
        typeDefs: [typeDefs],   //puede recibir un array como parametro para unir los archivos
        resolvers


    })

    const { url } = await server.listen()
    console.log('Server is in ' + url)
}

startApollo()