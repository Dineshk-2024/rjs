import React, { Component } from 'react'

export class Counter extends Component {
    state ={
        qty:1
    }
    increHandler=()=>{
     this.setState({qty: this.state.qty +1})
    }                                                      
    decreHandler=()=>{
        this.setState({qty: this.state.qty -1})
       }
  render() {
    return (
     
      <div>
         <br />
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header"></div>
                            <div className="card-body">
                                <h1 > qty: {this.state.qty}</h1><br/> 
<button className='btn btn-success mr-3' onClick={this.increHandler}>incre</button>
<button className='btn btn-warning' onClick={this.decreHandler}>decre</button>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
      </div>
    )
  }
}

export default Counter
