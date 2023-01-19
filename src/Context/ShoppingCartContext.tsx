
import React, { createContext, useState } from 'react'
import ShoppingStore from '../Component/ShoppingStore'
import { UseLocalStorage } from '../Hooks/UseLocalStroage'

type ContextProviderProp = {
    children: React.ReactNode
}

type ShopingCartFunctions = {
    getItemQuantaty: (id: number) => number,
    increaseCartQuantaty: (id: number) => void,
    decreaseCartQuantaty: (id: number) => void,
    removeFromCart: (id: number) => void,
    cartItem: CartItems[],
    storeQuantityItems: number,
    openStore: () => void,
    closeStore: () => void,
    isOpen:boolean
}

type CartItems = {
    id: number;
    quantity: number
}




export const ShoppingCartContext = createContext({} as ShopingCartFunctions)

export const ShoppingCartContextProvider = ({ children }: ContextProviderProp) => {

    const [cartItem, setCartItems] = UseLocalStorage<CartItems[]>('cartItem-Storage',[] as CartItems[])
    const [isOpen, setIsOpen] = useState<boolean>(false)

    function getItemQuantaty(id: number) {
        return cartItem.find((item) => item.id === id)?.quantity || 0

    }



    function increaseCartQuantaty(id: number) {

        setCartItems(cartItems => {

            if (cartItems.find(item => item.id === id) == null) {
                return [...cartItems, { id, quantity: 1 }]
            }
            else {

                return cartItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 }
                    }
                    else {
                        return item
                    }


                }
                )
            }
        })
    }



    function decreaseCartQuantaty(id: number) {


        setCartItems(cartItems => {
            if (cartItems.find(item => item.id === id)?.quantity === 1) {

                return cartItems.filter((item) => item.id !== id)
            }

            else {

                return cartItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 }
                    }
                    else {
                        return item
                    }
                })
            }

        })
    }

    function removeFromCart(id: number) {

        setCartItems(cartItems => {

            return cartItems.filter(item => item.id !== id)
        })
    }


    function openStore() {
        setIsOpen(true)
    }
    function closeStore() {
        setIsOpen(false)
    }




    const storeQuantityItems = cartItem.reduce((quantity, item) =>
        item.quantity + quantity, 0
    )







    return <ShoppingCartContext.Provider value={{storeQuantityItems,closeStore,openStore, cartItem, getItemQuantaty, increaseCartQuantaty, decreaseCartQuantaty, removeFromCart ,isOpen}}>
        {children}
        <ShoppingStore/>
    </ShoppingCartContext.Provider>
}


//////////////...........////////////..........onother sol

// isOpen={isOpen} => could be used as prop inside <shoppingStore/>