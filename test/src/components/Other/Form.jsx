import React from 'react'

class Child extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username:'0wweeee想0',
        }        
    }
    changeUser=(e)=>{
        this.setState({
            username:e.target.value
        })
        console.log(this.state.username)
    }
    render() {
        return (

             <div>
                 <h1>879889</h1>
                 <div>{this.state.username}</div>
                 <div><input type="text" value={this.state.username} onChange={this.changeUser}/></div>
             </div>
        );
    }
}
export default Child