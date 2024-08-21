import React, { Component } from 'react'

export class Product extends Component {
    state={
      stock : {
      product_name : "Apple iPhone 15 (Black, 128 GB)" ,
      image : "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/d/9/-original-imagtc2qzgnnuhxh.jpeg?q=70"  ,
      price : 64999, 
      qty : 1,
      total_price : 64999  
    }  }
    increHandler=()=>{
      this.setState({stock: {...this.state.stock , qty: this.state.stock.qty +1}})
     }                                                      
     decreHandler=()=>{
         this.setState({stock: {...this.state.stock , qty: this.state.stock.qty -1}})
        }
  render() {
    return (
      <div>
        <br />
        <div className="container">
            <div className="row">
                <div className="col-10">
                   <table className='table table-hover' border={2}>
                    <thead className='bg-info'>
                    <th>PNAME</th>
                    <th>IMAGE</th>
                    <th>PRICE</th>
                    <th>QTY</th>
                    <th>TOTAL PRICE</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{this.state.stock.product_name}</td>
                            <td><img width={100} src={this.state.stock.image}></img></td>
                            <td>{this.state.stock.price}</td>
                            <td><i className="fa fa-minus-circle" onClick={this.decreHandler}></i>
                              {this.state.stock.qty}
                              <i className="fa fa-plus-circle" onClick={this.increHandler}></i></td>
                              <td>{this.state.stock.qty * this.state.stock.price}</td>
                        </tr>
                    </tbody>
                   </table>
                </div>
            </div>
        </div>
        
      </div>
    )
  }
}

export default Product
