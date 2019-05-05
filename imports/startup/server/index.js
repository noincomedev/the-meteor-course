import {createApolloServer} from 'meteor/apollo'
import { makeExecutableSchema } from "graphql-tools";



const typeDefs = `

type Query {
   name: String
   price: String
   description: String
}

`;

const  resolvers = {
    Query:{
        name(){
            return "Best book"
        },
        price(){
           return "60"
        },
        description(){
            return "feature looks bright"
        }

    }

};


const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});


createApolloServer({schema});

console.log("Server up and running");