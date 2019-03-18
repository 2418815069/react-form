import React, { Component } from 'react'
// import { Route,Router,Link } from 'react-router'
import { BrowserRouter as Router,Route,Link } from 'react-router-dom'
import New1 from './New1';
import New from './New';
import Product from './Product';
import Home from './Home';
import Content from './Content'
import ProductContent from './ProductContent'
import HomeContent from './HomeContent'
import Form from '../Other/Form'
class Layout extends Component {
    constructor(){
        super();
        this.state = {
            f1:'我是父组件数据',
            f2:200,
            title: false,
            msg:'我是父组件的msg'
        }
        
    }
    getChildData=(result)=>{
        console.log(result)
        this.setState({
            msg:result
        })
    }
    // 父组件主动调用子组件的数据和方法
    getNew=()=>{
        // alert(this.refs.news.state.name)
    }
    componentDidMount(){
        this.getNew();
        // 执行子组件方法
        this.refs.news.add()
    }
    render() {
        return (
             <Router>
                     <div>
                         <header>
                        <Link to="/">首页</Link>
                        <Link to="/New1">新闻</Link>
                        <Link to="/Product">产品</Link>
                        <Link to="/">表单</Link>
                        <input type="button" value="获取整个底部组件" onClick={this.add}/>
                        </header>
                    <div>{this.state.msg}</div>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/New1" component={New1}></Route>
                    <Route path="/Product" component={Product}></Route>
                    <Route path="/Content/:aid" component={Content}></Route>
                    <Route path="/ProductContent" component={ProductContent}></Route>
                    <Route path="/HomeContent" component={HomeContent}></Route>
                    {/* <Route path="/Form" component={Form}></Route> */}
                    <New ref="news" news={this} f1={this.state.f1} f2={this.state.f2} title={this.state.title}></New>
                    </div>
             </Router>
        );
    }
};

export default Layout