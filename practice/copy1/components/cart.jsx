import React from "react"
class Cart extends React.Component{
    render(){
    return <div>
        <h1>cart-component</h1>
        <pre>{JSON.stringify}<br />
          Emp_ID: {this.props.User_data[1].Eid}<br />
         </pre>
    </div>
}
}
export default Cart