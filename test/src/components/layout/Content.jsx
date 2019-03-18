import React, { Component } from 'react'

import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
// import gql from 'graphql-tag';
import { ApolloProvider, graphql } from 'react-apollo';
import First from '../Apollo/First'

const client = new ApolloClient({
    link: new HttpLink({ uri: 'http://a.itying.com/api/productlist' }),
    cache: new InMemoryCache(),
  });
class Content extends Component {
    render() {
        return (
            <ApolloProvider client={client}>
            <First></First>
          </ApolloProvider>
        );
    }
};

export default Content