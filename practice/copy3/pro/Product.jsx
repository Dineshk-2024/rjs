import React, { useState } from 'react'
import "./Product.css"

let msgStyles_Internal = {color:"white"}

 let Product=()=>{
   let[pname,setPname] = useState('test')

   let updateHandler = (Prodname) =>{
      setPname(Prodname)
   }
  return (
    <div>
        <h2>Product Name: {pname}</h2>
        <h1 style={{color:"orange"}}> Good morning</h1>
        <h1 style={msgStyles_Internal}> Good afternoon</h1>
        <h1 className='msgStyles2'> Good afternoon</h1>

        <img  src='https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/d/9/-original-imagtc2qzgnnuhxh.jpeg?q=70' alt='#' width={170} onClick={updateHandler.bind (null, 'Iphone5s')}/>
        <img src='https://rukminim2.flixcart.com/image/612/612/xif0q/mobile/x/7/n/-original-imagzm8qzhpuwrak.jpeg?q=70' alt='#'width={250} onClick={updateHandler.bind(null, 'samsung')}/>
    </div>
  )
}
export default Product
