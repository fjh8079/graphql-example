import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getBookQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

class BookList extends Component {
  render() {
    console.log('this.props', this.props)
    return (
      <div id="book-list">

      </div>
    );
  }
}

export default graphql(getBookQuery)(BookList);
