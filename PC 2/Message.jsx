import React from "react";
class Message extends React.Component{
  state={
    Msg :"Hello"
  }
  gmHandler=()=>{
     this.setState({Msg :"GOOD MORNING"})
     
  }
  gnHandler=()=>{
    this.setState({Msg :"GOOD NIGHT"})

  }
    render(){
        return <div>

            <h2> Message comp</h2>
            <h2> Wish Message : {this.state.Msg}</h2>
            <button className="btn btn-primary" onClick={this.gmHandler}>GM</button>
            
            <button className="btn btn-primary" onClick={this.gnHandler}>GN</button>
        </div>

        
    }
}
export default Message