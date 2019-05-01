import {createApolloServer} from 'meteor/apollo'
import { makeExecutableSchema } from "graphql-tools";


const typeDefs = `

type Query {
   name: String
}

`;

const  resolvers = {
    Query:{
        name(){
            return "Isaac"
        }
    }

};


const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});


createApolloServer({schema});

console.log("Server up and running");