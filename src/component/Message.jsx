import React, { useState } from "react";
let Message =()=>{
  let [msg, setMsg] = useState("hello")
 let gmHandler=(value)=>{
     setMsg(value)
     
  }
  return <div>
            <h2> Message comp</h2>
            <h2> Wish Message : {msg}</h2>
            <button className="btn btn-primary" onClick={gmHandler.bind(null, "good morning")}>GM</button>
            
            <button className="btn btn-primary" onClick={gmHandler.bind(null, "good night")}>GN</button>
        </div>

        
    }

export default Message