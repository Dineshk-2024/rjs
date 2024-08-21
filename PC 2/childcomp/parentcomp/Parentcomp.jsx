import React from "react";
import Childcomp from "../Childcomp";

class Parentcomp extends React.Component{
     Mail = "dinesh42002@gmail.com";
     Message = {
        Message : "good morning",
        User : "dinesh",
     };
     constructor(){
        super();
     this.state = {
      Employee : {
        Empcode: "04",
        Name : "Dinesh",
        Age : 22 ,
        Email : "abc@gmail.com",
        Location : "Bangalore",
      }
    }
}
 NameHandler =()=>{
    
    this.state.Employee.Name = ("vijay")
    
    this.forceUpdate();
   

 }
         render(){
        return <div>
            <Childcomp Employee1 = {this.state.Employee}
            Message1 = {this.Message}
            mail1 = {this.Mail} />
             <button onClick={this.NameHandler }>name</button>
        </div>
    }
}

export default Parentcomp