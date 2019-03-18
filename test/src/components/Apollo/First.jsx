import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Query,graphql } from 'react-apollo';

const GET_DOG_PHOTO = gql`
  query Result($breed: string) {
    List(title: $breed) {
      _id
      title,
      price
    }
  }
`;
// const List = ({ breed }) => (
//     <Query query={GET_DOG_PHOTO} variables={{ breed }}>
//       {({ loading, error, data }) => {
//         if (loading) return null;
//         if (error) return `Error!: ${error}`;
  
//         // return (
//         //   <img src={data.dog.displayImage} style={{ height: 100, width: 100 }} />
//         // );
//       }}
//     </Query>
//   );

class First extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount(){
        // console.log(this.props.match.params.aid)
    }
    render() {
        if(this.props.data.loading){
            return (<div>loading</div>)
        }
        if(this.props.data.error){
            return (<div>error</div>)
        }
        return (
            <div>{this.props.data}</div>
        )
    }
};
const FirstData = graphql(GET_DOG_PHOTO,{
  options: {
    variables:{
      title: "精选热菜"
    }
  }
})(First)
export default FirstData