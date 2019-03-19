import React, { Component } from 'react'
import styled, { css } from 'styled-components';
import { BrowserRouter as Router,Route,Link } from 'react-router-dom'

import Event from '../Form/Event'
import NewList from '../TodoList/NewList'
import BetterList from '../TodoList/BetterList'
import Home from './Home'
const Container = styled.div`
width:620px;
margin: 0 auto;
    `
const Linkspan = styled.span`
background-color: yellowgreen;
text-align: center;
width: 80px;
height: 35px;
line-height:35px;
display: inline-block;
    `
class Layout extends Component {
    constructor(){
        super();
        this.state = {
        }
        
    }
    
    render() {
        return (
             <Router>
                     <Container>
                         <header>
                            <Link to="/"><Linkspan>首页</Linkspan></Link>
                            
                            <Link to="/Event"><Linkspan>Event</Linkspan></Link>
                            <Link to="/NewList"><Linkspan>NewList</Linkspan></Link>
                            <Link to="/BetterList"><Linkspan>BetterList</Linkspan></Link>
                        </header>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/Event" component={Event}></Route>
                    <Route path="/NewList" component={NewList}></Route>
                    <Route path="/BetterList" component={BetterList}></Route>
                    </Container>
             </Router>
        );
    }
};

export default Layout