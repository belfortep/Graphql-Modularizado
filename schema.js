import { gql } from "apollo-server"
import { typeDefs as Author, resolvers as AuthorResolvers } from "./author.js"
import { typeDefs as Book, resolvers as BookResolvers } from "./book.js"
//graphql te obliga a tener una Query y una Mutacion inicial, simplemente dejo estas vacias
const rootTypeDefs = gql`

    type Query {
        _: String
    }

    type Mutation {
        _: String
    }


`

export const resolvers = [BookResolvers, AuthorResolvers]

export const typeDefs = [rootTypeDefs, Author, Book]