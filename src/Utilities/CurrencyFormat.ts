import React from 'react'
let currencyFormating = new Intl.NumberFormat(undefined,{currency:"USD",style:"currency"})

export default function CurrencyFormat(number:number) {
    return currencyFormating.format(number)
}
