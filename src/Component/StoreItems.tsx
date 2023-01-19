import React, { useContext } from 'react'
import { Button, Card } from 'react-bootstrap'
import { ShoppingCartContext } from '../Context/ShoppingCartContext'
import CurrencyFormat from '../Utilities/CurrencyFormat'
type storeItemsProps={
    id:number,
    name:string,
    price:number,
    imgUrl:string
}
export default function StoreItems({id,name,price,imgUrl}:storeItemsProps) {


const{getItemQuantaty,increaseCartQuantaty,decreaseCartQuantaty,removeFromCart}=useContext(ShoppingCartContext)
const quantinty=getItemQuantaty(id)


  return (
    <>
    <Card>
<Card.Img variant='top' src={imgUrl} style={{objectFit:"cover"}} height="200px"/>
<Card.Body>

    <div className="d-flex justify-content-between align-items-baseline">
        <span className='h4'>{name}</span>
        <span className='text-muted'>{CurrencyFormat(price)} </span>



    </div>
<div className="text-center">


{quantinty===0? <Button className='w-100 my-3' onClick={()=>{increaseCartQuantaty(id)}}>+Add to card</Button> : 
    
    <div className="d-fled m-auto flex-column align-align-items-center my-3" style={{gap:"5rem"}}>
   <div className="flex">
   <Button className='btn btn-primary' onClick={()=>{decreaseCartQuantaty(id)}}>-</Button>
<span className='mx-2'><span className='fs-3'>{quantinty}</span> in cart</span>
    <Button className='btn btn-primary' onClick={()=>{increaseCartQuantaty(id)}}>+</Button>
   </div>
   <Button className='btn-danger my-3' onClick={()=>{removeFromCart(id)}}>remove item</Button>
</div>
    }
</div>
  
   
</Card.Body>
    </Card>
    </>
  )
}
