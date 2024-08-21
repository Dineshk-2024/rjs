import React, { Component } from 'react'
import axios from 'axios'
export class User extends Component {
    state={emp: []}
    getemp=()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((resp)=>{
            this.setState({emp: resp.data})
        })
        .catch(()=>{})
    }
  render() {
    return (
      <div>
        <h1>users component</h1>
        <pre>{JSON.stringify(this.state.emp)}</pre>
        <button onClick={this.getemp}>get users</button>
        <br/><br/>
        
        <table border={2}>
            <thead>
                <th>ID</th>
                <th>NAME</th>
                <th>Email</th>

            </thead>
            <tbody>
                {
                    this.state.emp.length > 0 ? <>
                    {
                        this.state.emp.map((emp)=>{
                            return <tr key={emp.id}>
                                <td>{emp.id}</td>
                                <td>{emp.name}</td>
                                <td>{emp.email}</td>
                               
                            </tr>
                        })
                    }
                    </>: <React.Fragment>no data</React.Fragment>
                }
            </tbody>
        </table>
      </div>
    )
  }
}

export default User
