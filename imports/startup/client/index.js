import {Meteor} from 'meteor/meteor'
import {render} from 'react-dom'
import React from  'react'
import {ApolloClient} from 'apollo-client'
import {ApolloProvider} from 'react-apollo'
import {HttpLink} from  'apollo-link-http'
import {InMemoryCache} from "apollo-cache-inmemory";
import App from "../../ui/App"

const GRAPHQL = 'graphql';
const httpLink = new HttpLink({
   uri: Meteor.absoluteUrl(GRAPHQL)
});

const cache = new InMemoryCache();

const client =  new ApolloClient({
      link:httpLink,
      cache
})

const ApolloApp = () =>
    (
       <ApolloProvider client={client}>
          <App/>
       </ApolloProvider> );

Meteor.startup( () =>{
   console.log("Meteor start up");
   render( <ApolloApp/> , document.getElementById("app") );
});