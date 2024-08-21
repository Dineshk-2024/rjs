import React from "react";
import Cart from "./cart";

class Products extends React.Component{
     product ;
     constructor(props){   
     super (props)
     console.log("first")
     this.product = {    
        pid : 101,
        phone:"iphone5s",
        price : 50000,
        color : ["white","black"]  
     }
     }


    render(){
        console.log("second")
         return <div>
            <h2>product component</h2>
            <hr />
            <Cart product={this.product}/>
         </div>
    }
}
export default Products 