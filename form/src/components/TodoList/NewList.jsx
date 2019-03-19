import React, { Component } from 'react'
class NewList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }
    inputKeyUp=(e)=>{
        if(e.keyCode == 13&&this.refs.msg.value){
            // this.state.list.push(this.refs.msg.value)
            // alert(this.state.list)
            let templist = this.state.list
            templist.push(this.refs.msg.value)
            this.refs.msg.value= ''
            this.setState({
                list:templist
            })
        }
        
        // console.log(e.keyCode)
        // this.setState({
        //     username:e.target.value
        // })
    }
    deleList=(key)=>{
        let templist = this.state.list
        templist.splice(key,1)
        this.setState({
            list:templist
        })
    }
    render() {
        return (
             <div>
                 <div>
                    <h1>TodoList添加列表</h1>
                    <div><input type="text" ref="msg" value={this.state.username} onKeyUp={this.inputKeyUp}/></div>
                    </div>
                    <div>
                    
                    <h1>删除列表</h1>
                    <ul>
                    {
                        this.state.list.map((val,key)=>{
                            return(
                                <li key={key}>{val}<button onClick={this.deleList.bind(this,key)}>删除</button></li>
                            )
                        })
                    }
                    </ul>
                    
                </div>
             </div>
        );
    }
};

export default NewList