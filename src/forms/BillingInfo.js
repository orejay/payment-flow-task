import React from 'react'
import './PersonalInfo.css'

export default function BillingInfo() {
  return (
    <div>
        <div className='form'>
            <div className='input-wrap'>
                <label htmlFor="name">Name on Card <sup>*</sup></label>
                <input type="text" name='name' id='card-name' />
            </div>
            <div className='input-wrap'>
                <label htmlFor="name">Card Type <sup>*</sup></label>
                <input type="text" name='name' id='card-type' />
            </div>
            <div className='input-wrap-row'>
                <div className='input-wrap' id='card-bx'>
                    <label htmlFor="lg">Card details <sup>*</sup></label>
                    <input type="text" name='lg' id='lg' />
                </div>
                <div className='input-wrap' id='expiry-bx'>
                    <label htmlFor="state">Expiry date <sup>*</sup></label>
                    <input type="text" name='state'/>
                </div>
                <div className='input-wrap' id='cvv-bx'>
                    <label htmlFor="state">CVV <sup>*</sup></label>
                    <input type="text" name='state'/>
                </div>
            </div>
        </div>
        <div id='confirmation'>
        
        </div>
    </div>
  )
}
