import React, { useContext } from 'react'
import { Nav, Container, Navbar as NavBar } from "react-bootstrap"
import { NavLink } from 'react-router-dom'
import { ShoppingCartContext } from '../Context/ShoppingCartContext'


export default function Navbar() {
    const {storeQuantityItems,openStore}=useContext(ShoppingCartContext)
    return (
        <NavBar className='bg-white shadow py-3 sticky-top '>
            <Container>
                <Nav>
                    <li className="nav-item">
                        <NavLink className="nav-link" to='home' >Home</NavLink>

                    </li>
                   
                    <li className="nav-item">
                        <NavLink className="nav-link" to='about' >
                            About
                        </NavLink>
                    </li>
                </Nav>


                {storeQuantityItems>0 && (   <div className='btn-outline-primary btn position-relative ' onClick={openStore}>
                <i className="fa-solid fa-cart-shopping fa-lg fa-white "></i>
                <div className='position-absolute bottom-0 end-0 bg-danger rounded-circle w-50 ' style={{transform:"translate(30%,25%)"}}>{storeQuantityItems}</div>
                                </div>)}
             


            </Container>
        </NavBar>
    )
}
