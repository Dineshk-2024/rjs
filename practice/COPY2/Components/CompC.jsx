import React from "react";
import CompD from "./CompD";
const CompC = (props) =>{
    return <div>
        <h1>Component-c</h1>
        <pre>{JSON.stringify(props)}</pre>
        <CompD Name={props.Name} Id ={props.ID}/>
    </div>
}
export default CompC