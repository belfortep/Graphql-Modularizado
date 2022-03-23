import { gql } from "apollo-server";

//extend hace que se pasen los valores a la consulta raiz
export const typeDefs = gql`

    extend type Query{
        author(id: ID!): Author
    }

    extend type Mutation{
        createAuthor(firstName: String): String
    }

    type Author{
        id: ID!
        firstName: String
        lastName: String
        books: [Book]
    }

`

export const resolvers = {
    Query: {
        author: (_, { id }) => {
            return {
                id,
                firstName: "Name",
                lastName: "LastName",
                books: []
            }
        }
    },

    Mutation: {
        createAuthor: () => "New Author"
    }
}