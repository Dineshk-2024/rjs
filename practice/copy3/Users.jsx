import React, { useState } from 'react'
import axios from 'axios'       
const Users = () => {
    let[user, setUsers] = useState([])
    let getUsers =()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            console.log(response) 
            console.log(response.data)
            setUsers(response.data)
                            })  
        .catch((error) => {console.log(error)})
    }
  return (
    <div>
        <h3>users component</h3>
        <button onClick={getUsers}>axios</button>
        <pre>{JSON.stringify(user)}</pre>      
    </div>
  )
}
export default Users
