import React, { Component } from 'react'
class Event extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username:''
        }
    }
    changeUser=(e)=>{
        console.log(e.target.value)
        this.setState({
            username:e.target.value
        })
    }
    inputKeyUp=(e)=>{
        console.log(e.keyCode)
        // this.setState({
        //     username:e.target.value
        // })
    }
    render() {
        return (
             <div>
                 <div>
                 <h1>表单事件</h1>
                 <div>{this.state.username}</div>
                 <div><input type="text" value={this.state.username} onChange={this.changeUser}/></div>
                 </div>
                 <div>
                 <h1>键盘事件</h1>
                 <div>{this.state.username}</div>
                 <div><input type="text" onKeyUp={this.inputKeyUp}/></div>
                 </div>
             </div>
        );
    }
};

export default Event