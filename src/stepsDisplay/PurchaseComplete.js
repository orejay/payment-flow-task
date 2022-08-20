import React from 'react'
import './purchaseComplete.css'

export default function PurchaseComplete() {
  return (
    <div id='message-box'>
        <div id='done-circle'></div>
        <div id='info'>
            <h2>Purchase Completed</h2>
            <p>Please check your email for details concerning this transaction</p>
            <a href='/'>Return Home</a>
        </div>
    </div>
  )
}
