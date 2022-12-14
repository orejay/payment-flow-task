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
                <input type="text" name='name' id='card-name' className='required' placeholder='Opara Linus Ahmed' required/>
            </div>
            <div className='input-wrap'>
                <label htmlFor="name">Card Type <sup>*</sup></label>
                <select id="state">
                    <option value="Visa">Visa</option>
                    <option value="Verve">Verve</option>
                    <option value="Mastercard">Mastercard</option>
                </select>
            </div>
            <div className='input-wrap-row'>
                <div className='input-wrap' id='card-bx'>
                    <label htmlFor="lg">Card details <sup>*</sup></label>
                    <InputMask mask="99999   99999   99999   99999" className='required' placeholder='44960   44960   44960   44960' required/>
                </div>
                <div className='input-wrap' id='expiry-bx'>
                    <label htmlFor="expiry">Expiry date <sup>*</sup></label>
                    <InputMask mask={mask} formatChars={formatChars} className='required' placeholder='04/23' required/>
                </div>
                <div className='input-wrap' id='cvv-bx'>
                    <label htmlFor="state">CVV <sup>*</sup></label>
                    <InputMask mask="999" id='cvv' className='required' placeholder='923' required/>
                </div>
            </div>
        </div>
        <div id='confirmation'>
        
        </div>
    </div>
  )
}
