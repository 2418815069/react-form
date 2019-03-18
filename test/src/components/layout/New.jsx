import React from 'react'
import PropTypes from 'prop-types'

class New extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            a:100,
            b:200,
            name:'茉莉',
        }
        
    }
    add=()=>{
        // this.setState(
        //     this.state.a=this.state.a+1,
        //     this.state.b=this.state.b+1
        // )
        // alert(this.state.a)
        console.log(this.state.a)
    }
    add1(str){
        this.setState({
            name:str
        })
        console.log(this.state.name)
    }
    render() {
        return (

             <div>
                 <div>{this.props.f1}</div>
                 <div>{this.props.f2}</div>
                 <div>{this.props.title}</div>
                 <div>{this.state.name}</div>
                 <div><input type="button" value="按我" onClick={(this.add1).bind(this)}/></div>
             <input type="button" value="按我" onClick={this.add}/>
             <input type="button" value="按我" onClick={this.add1.bind(this,'周三')}/>
             <input type="button" value="给父组件传值" onClick={this.props.news.getChildData.bind(this,this.state.name)}/>
             </div>
        );
    }
}
// New.defaultProps={
//     title: '标题哦'
// }
// New.propTypes = {
// title: PropTypes.number,
// f1: PropTypes.bool
// }
export default New