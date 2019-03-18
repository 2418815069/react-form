import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Form from '../Other/Form'
export default class New1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
            list:[
                {
                    aid:"1",
                    title: "我是新闻111"
                },
                {
                    aid:"2",
                    title: "我是新闻222"
                },
            ]
        }
    }
  render() {
    return (
      <div>
        我是新闻组件
        <Form></Form>
        <ul>
            {
                this.state.list.map((value,key)=> {
                    return (
                    <div>
                        <li key={key}>
                    <Link to={`/Content/${value.aid}`}>{value.title}</Link>
                    </li>
                    
                    </div>)
                })
            }
        </ul>
      </div>
    )
  }
}
