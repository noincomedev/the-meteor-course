import  ResolversSchema from "../../../api/resolvers/ResolversSchema.graphql"
import {createApolloServer} from 'meteor/apollo'
import { makeExecutableSchema } from "graphql-tools";

const Products = `
    type Product{
        _id: String!
        name:String!
    }
`;

const testP = ` 
type Query {
   name: String
   price: String
   description: String
   products: [Product!]!
}
`;

const typeDefs = [testP, Products];

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
        },
        products(){
            return [
                {_id:"101", name:"React"},
                {_id:"102", name:"Rails"},
                {_id:"103", name:"Ruby"},
                {_id:"104", name:"graphql"},
            ];
        }
    }

};


const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});


createApolloServer({schema});

console.log("Apollo Server up and running");