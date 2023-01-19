import React, { useContext } from 'react'
import { Offcanvas, Row,Stack } from 'react-bootstrap'
import { ShoppingCartContext } from '../Context/ShoppingCartContext'
import CurrencyFormat from '../Utilities/CurrencyFormat'
import CartItem from './CartItem'
import storeItems from '../Data/Item.json'

// type shoppingStoreProp={

//     isOpen:boolean
// }


export default function ShoppingStore() {
const {closeStore,cartItem,isOpen}= useContext(ShoppingCartContext)

  return (
    <>
    <Offcanvas show={isOpen} onHide={closeStore} placement='end'>
        <Offcanvas.Header closeButton>
            <h4>Shopping Card</h4>

        </Offcanvas.Header>
        <Offcanvas.Body>
          <Stack gap={3}>
<Row>
   {cartItem.map(item=>
    <CartItem    {...item}  key={item.id}/>
  )}
</Row>  

</Stack>


        </Offcanvas.Body>

    </Offcanvas>

    </>
  )
}
