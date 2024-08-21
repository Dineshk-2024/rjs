import React from "react";
import CompC from "./CompC";
const CompB = (props) => {
    return (
        <div>
            <h1>component-b</h1>
            <pre>{JSON.stringify(props)}</pre>
            <CompC Name={props.emp_name} ID={props.emp_id} LOC={props.emp_loc}/>
        </div>
    );
}

export default CompB;
