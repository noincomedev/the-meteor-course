import React, {Component} from 'react'
import gql from 'graphql-tag'
import {graphql} from 'react-apollo'

const book = gql `
{
name 
price
description
}

`;
 class App extends Component{
    render() {
        return(
            <div className="container">
                <h1>Strange things app  </h1>
                    <ul>
                        <li>name: {this.props.data.name}</li>
                        <li>price: {this.props.data.price}</li>
                        <li>description: {this.props.data.description} </li>
                    </ul>
            </div>
        )
    }

}


export default  graphql(book)(App)