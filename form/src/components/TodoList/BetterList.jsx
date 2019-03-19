import React, { Component } from 'react'
// 引入自定义模块
import storage from '../model/storage'
class BetterList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list:[
            {
                title: '录制ionic',
                checked: true
            },{
                title: '录制ionic1',
                checked: false
            },{
                title: '录制ionic2',
                checked: false
            },{
                title: '录制ionic3',
                checked: true
            },{
                title: '录制ionic4',
                checked: false
            },{
                title: '录制ionic5',
                checked: true
            }]
        }
    }
    inputKeyUp=(e)=>{
        if(e.keyCode == 13&&this.refs.msg.value){
            let templist = this.state.list
            templist.push({
                title:this.refs.msg.value,
                checked:false
            })
            this.setState({
                list:templist
            })
            this.refs.msg.value= ''
            localStorage.setItem('todolist',JSON.stringify(templist))

        }
        
    }
    checkboxChange=(key,val)=>{
        let templist = this.state.list
        templist[key].checked=!templist[key].checked
        this.setState({
            list:templist
        })
        localStorage.setItem('todolist',JSON.stringify(templist))
    }
    deleList=(key)=>{
        let templist = this.state.list
        templist.splice(key,1)
        this.setState({
            list:templist
        })
        storage.set('todolist',templist)
    }
    componentDidMount(){
        // let todolist=JSON.parse(localStorage.getItem('todolist'))
        let todolist= storage.get('todolist')
        if(todolist){
            this.setState({
                list:todolist
            })
        }
    }
    render() {
        return (
             <div>
                 <div>
                     <input ref="msg" onKeyUp={this.inputKeyUp}/>
                    <h1>代办事项</h1>
                    <ul>
                    {
                        this.state.list.map((val,key)=>{
                            if(!val.checked){
                                return(
                                    
                                    <li key={key}>
                                        <input type="checkbox" checked={val.checked} onChange={this.checkboxChange.bind(this,key,val.checked)}/>{val.title}
                                        <button>删除</button>
                                        {/* <checkbox checked={val.checked}>{val.title}</checkbox> */}
                                    </li>
                                )
                            }
                            
                        })
                    }
                    </ul>
                    
                    </div>
                    <div>
                    <hr></hr>
                    <h1>已完成事项</h1>
                    <ul>
                    {
                        this.state.list.map((val,key)=>{
                            if(val.checked){
                                return(
                                    
                                    <li key={key}>
                                        <input type="checkbox" onChange={this.checkboxChange.bind(this,key,val.checked)} checked={val.checked}/>{val.title}
                                        <button onClick={()=>{this.deleList(key)}}>删除</button>
                                        {/* <checkbox checked={val.checked}>{val.title}</checkbox> */}
                                    </li>
                                )
                            }
                            
                        })
                    }
                    </ul>
                    
                </div>
             </div>
        );
    }
};

export default BetterList