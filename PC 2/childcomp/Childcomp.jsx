import React from "react";
class Childcomp extends React.Component {

    render(){
        const { Employee1}= this.props;
        return <div>
             <table border="110" cellPadding="10" >
             <thead>
             <tr>
                <th>Field</th>
                <th>Value</th>
             </tr>
            </thead>
            <tbody>
                <tr>
                    <td>EMPCODE </td>  <td> {Employee1.Empcode}</td>
                </tr>
                <tr>
                    <td>NAME  </td>  <td> {Employee1.Name}</td>
                </tr>
                <tr>
                    <td>AGE  </td>  <td>  {Employee1.Age}</td>
                </tr>
                <tr>
                    <td>EMAIL  </td>  <td>  {Employee1.Email}</td>
                </tr>
                <tr>
                    <td>LOCATION  </td>  <td>  {Employee1.Location}</td>
                </tr>
                <tr>
                    <td>MESSAGE </td>  <td>  {this.props.Message1.Message}</td>
                </tr>
                <tr>
                    <td>USER </td>  <td>  {this.props.Message1.User}</td>
                </tr>
                <tr>
                    <td>EMAIL </td>  <td>  {this.props.mail1}</td>
                </tr>
                </tbody>
                
            </table>
           
        </div>
    }
}
export default Childcomp