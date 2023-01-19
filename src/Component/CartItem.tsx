import React, { useContext } from 'react'
import { Button,  Stack } from 'react-bootstrap'
import { ShoppingCartContext } from '../Context/ShoppingCartContext'
import storeItems from '../Data/Item.json'
import CurrencyFormat from '../Utilities/CurrencyFormat'

type cartItem={
    id:number,
    quantity:number
}


export default function CartItem({id,quantity}:cartItem) {

const {removeFromCart}=useContext(ShoppingCartContext)

const item = storeItems.find(item=> item.id===id)
if(item == null){
    return null
}


  return (
    <>

    <Stack gap={3} direction='horizontal' className='d-flex align-items-center my-2' >

    <img src={item.imgUrl} style={{objectFit: "cover",height:'75px',width:'125px'}}   />
    <div className="me-auto">
      <div className='h6 '>  {item.name}
        
        {quantity>0 &&  <span className='text-muted'> {quantity}x</span>}
        </div>
        <div>{CurrencyFormat(item.price)}</div>

    
    </div>

    <div className="ms-auto">
        <div className="text-muted">{CurrencyFormat(item.price*quantity)} <span className="btn btn-danger py-1" onClick={()=>{removeFromCart(id)}}>-</span></div>
    
    </div>

   



    </Stack>
    </>
  )
}
