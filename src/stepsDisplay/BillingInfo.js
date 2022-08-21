import React from 'react'
import './styles/forms.css'
import InputMask from 'react-input-mask';

export default function BillingInfo() {
    let mask = 'mM/yY';
    let formatChars = {
        'y': '[0-2]',
        'Y': '[0-9]',
        'm': '[0-1]',
        'M': '[1-9]'
    };
  return (
    <div>
        <div className='form'>
            <div className='input-wrap'>
                <label htmlFor="name">Name on Card <sup>*</sup></label>
                <input type="text" name='name' id='card-name' className='required' required/>
            </div>
            <div className='input-wrap'>
                <label htmlFor="name">Card Type <sup>*</sup></label>
                <input type="text" name='name' id='card-type' className='required' required/>
            </div>
            <div className='input-wrap-row'>
                <div className='input-wrap' id='card-bx'>
                    <label htmlFor="lg">Card details <sup>*</sup></label>
                    <InputMask mask="99999   99999   99999   99999" className='required' required/>
                </div>
                <div className='input-wrap' id='expiry-bx'>
                    <label htmlFor="expiry">Expiry date <sup>*</sup></label>
                    <InputMask mask={mask} formatChars={formatChars} className='required' required/>
                </div>
                <div className='input-wrap' id='cvv-bx'>
                    <label htmlFor="state">CVV <sup>*</sup></label>
                    <InputMask mask="999" id='cvv' className='required' required/>
                </div>
            </div>
        </div>
        <div id='confirmation'>
        
        </div>
    </div>
  )
}
