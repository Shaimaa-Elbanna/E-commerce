import React from 'react'
import { Container, Row , Col} from 'react-bootstrap'
import StoreItems from '../Component/StoreItems'
import storeItems from '../Data/Item.json'

export default function Home() {
  return (<>
   <Container className='mt-5 shadow'>
    <Row xs={1} md={2} lg={3} className='g-3' >



   
   {storeItems.map(item=>
    <Col> 
    <StoreItems {...item}/>
     </Col>
   )}

   
    </Row>
   </Container>
  </>
   
  )
}
