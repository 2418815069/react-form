import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
          list:[
              {
                  aid:"1",
                  title: "我是产品111"
              },
              {
                  aid:"2",
                  title: "我是产品222"
              },
              {
                  aid:"3",
                  title: "我是产品333"
              },
              {
                  aid:"4",
                  title: "我是产品444"
              },
          ]
        }
        this.domain = 'http://a.itying.com/api/productlist'
    }
  render() {
    return (
      <div>
        我是产品组件
        <ul>
            {
                this.state.list.map((value,key)=> {
                    return <li key={key}>
                    <Link to={`/ProductContent?aid=${value.aid}`}>{value.title}</Link>
                    </li>
                })
            }
        </ul>
      </div>
    )
  }
}
