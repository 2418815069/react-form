import React, { Component } from 'react'
import axios from 'axios'
import url from 'url'
import styled from 'styled-components'
const Container = styled.div`
width:420px;
margin: 0 auto;
    `
const Img = styled.img`
width: 100%;
`
const Price = styled.div`

`
const Item = styled.div`

`
const Title = styled.div`

`
const H3 = styled.h3`
line-height:50px;
`
export default class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            domain: 'http://a.itying.com/',
            domain1:'http://a.itying.com/api/productcontent?id=5ac1a22011f48140d0002955',
        }
    }
    requireData = (aid)=>{
        let api = this.state.domain+'api/productcontent?'+aid;
        axios.get(api).then((response)=>{
            this.setState({
                list:response.data.result[0]
            })
            console.log(this.state.list);
        }).catch(function(err){
            console.log(err)
        })
    }
    componentDidMount(){
      let aid = url.parse(this.props.location.search).query;
      this.requireData(aid);
    }
  render() {
    return (
      <div>
        <Container>
            <Item>
              {this.state.list.img_url?<Img src={`${this.state.domain+this.state.list.img_url}`}/>:""}
                <Price>{this.state.list.price}元</Price>
                <Title> {this.state.list.title} </Title>
                <Price>{this.state.list.catename}</Price>
                <Price>{this.state.list.description}</Price>
            </Item>
        </Container>
      </div>
    )
  }
}
