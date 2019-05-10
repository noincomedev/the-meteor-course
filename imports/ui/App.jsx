import React, {Component} from 'react'
import gql from 'graphql-tag'
import {graphql} from 'react-apollo'

const book = gql `
{
name 
price
description
products {
 name
}

}

`;
 class App extends Component{

     render() {
        const {data} = this.props;

        if (data.loading === null) return null;
        console.dir(this.props.products);
        return(
            <div className="container">
                <h1>Strange things app  </h1>
                    <ul>
                        <li>{this.props.data.name}</li>
                        <li>{this.props.data.price}</li>
                        <li>{this.props.data.description}</li>
                    </ul>

            </div>
        )
    }

}


export default  graphql(book)(App)