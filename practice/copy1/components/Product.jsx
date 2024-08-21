import React from "react"
import Cart from "./cart"

class Product extends React.Component{
    employee =[{ 
            Ename : "Dinesh",Eid : 101,Eage : 22,Elocation : "Bangalore"},
        {Ename : "Ganesh",Eid : 102,Eage : 23,Elocation : "Mangalore"}]
    render(){
    return <div> 
     <h2>product-component</h2>
    <Cart User_data= {this.employee} />
    </div>
    } 
} 
 
 export default Product