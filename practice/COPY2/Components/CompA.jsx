import React from "react"
import CompB from "./CompB"
const CompA =()=>{
    let Eid = 101;
    let Ename = "Dinesh";
    let Eloc = "Bangalore";
    let Egender = "Male"
            
    return <div>
        <h1>component-a</h1>
     <CompB emp_id ={Eid} emp_name={Ename} emp_loc={Eloc} emp_gen={Egender}/>
    </div>
}
export default CompA





