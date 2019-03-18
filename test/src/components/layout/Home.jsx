import React, { Component } from 'react'
import axios from 'axios';
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
width:420px;
margin: 0 auto;
    `
const Ul = styled.ul`
width:100%;
margin: 0 auto;
padding:0;
display: flex;
flex-wrap: wrap;
`
const Li = styled.li`
display:inline-block;
width:30%;
padding:5px;
overflow:hilden;
box-sizing: box-border;
`
const Item = styled.div`

`
const Title = styled.div`

`
const Img = styled.img`
width:130px;
`
const Price = styled.div`

`
const H3 = styled.h3`
line-height:50px;
`
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            domain: 'http://a.itying.com/',
            domain1:'http://a.itying.com/api/productcontent?id=5ac1a22011f48140d0002955'
        }
    }
    requireData = ()=>{
        let api = this.state.domain+'api/productlist'
        axios.get(api).then((response)=>{
            this.setState({
                list:response.data.result
            })
            console.log(this.state.list);
        }).catch(function(err){
            console.log(err)
        })
    }
    componentDidMount(){
      this.requireData()
    }
    
  render() {
    return (
      <div>
            {
              this.state.list.map((value,key)=>{
                return(
                  <Container key={key}>
                    <H3>{value.title}</H3>
                    <Ul>
                    {
                       value.list.map((v,k)=>{
                         return(
                            <Li key={k} >
                              <Link to={`/HomeContent?id=${v._id}`}>
                                  <Item>
                                    <Img src={`${this.state.domain+v.img_url}`}/>
                                    <Title> {v.title} </Title>
                                    <Price>{v.price}</Price>
                                  </Item>
                              </Link>
                              
                            </Li>
                         )
                          
                       })
                     }
                    </Ul>
                  </Container>
                )
              })
            }
      </div>
    )
  }
}
