import React, { Component } from 'react'
import url from 'url'
class ProductContent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount(){
        console.log(url.parse(this.props.location.search).query)
        // console.log(this.props)
    }
    render() {
        return (
             <div>ProductContent</div>
        );
    }
};

export default ProductContent