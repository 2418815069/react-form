import React, { Component } from 'react'
// import { Route,Router,Link } from 'react-router'
import { BrowserRouter as Router,Route,Link } from 'react-router-dom'
import New1 from './New1';
import Product from './Product';
import Home from './Home';
class Index extends Component {
    haha(hoby){
        if (hoby == '篮球') {
            return (
                <div> {hoby} lq</div>
            )
        } else {
            return (
                '<div> {hoby} zq</div>'
            )
        }
    }
    render() {
        let arr = ['白板','白板1','白板2','白板3','白板4'];
        arr.map((item,id)=>{
            return <li key={id}>{item}</li>
        })
        let xixi = ()=>{
            return(
                <ol>
                    <li style={{"width":"100px","height":"30px","color":"yellow"}}>香蕉1</li>
                    <li>香蕉224</li>
                    <li>香蕉</li>
                    <li>香蕉4</li>
                    
                </ol>
            )
        }
        return (
            //  <div>
            //  {/* <div>呵呵规模扩大{500+30}</div>
            //  {3>8?"A":8}
            //  {xixi()}
            //  <div>{this.haha('guyi')}49</div>
            //  <div>{arr}</div> */}
             <Router>
                     <div>
                         <header>
                        <Link to="/">首页</Link>
                        <Link to="/New1">新闻</Link>
                        <Link to="/Product">产品</Link>
                        </header>
                    
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/New1" component={New1}></Route>
                    <Route path="/Product" component={Product}></Route>
                    </div>
             </Router>
            //  </div>
        );
    }
};

export default Index