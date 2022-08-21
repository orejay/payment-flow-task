import React from 'react'
import './styles/forms.css'

export default function PersonalInfo() {
  return (
    <div className='form'>
      <div className='input-wrap'>
        <label htmlFor="name">Name</label>
        <input type="text" name='name' id='name' />
      </div>
      <div className='input-wrap'>
        <label htmlFor="name">Email Address <sup>*</sup></label>
        <p id='email-desc'>The purchase reciept would be sent to this address</p>
        <input type="email" name='email' id='email' className='required' required/>
      </div>
      <div className='input-wrap'>
        <label htmlFor="address-1">Address 1</label>
        <input type="address" name='address-1' id='address-1' />
      </div>
      <div className='input-wrap'>
        <label htmlFor="name">Address 2</label>
        <input type="address" name='address-2' id='address-2' />
      </div>
      <div className='input-wrap-row'>
        <div className='input-wrap' id='lg-bx'>
            <label htmlFor="lg">Local Government</label>
            <input type="text" name='lg' id='lg' />
        </div>
        <div className='input-wrap' id='state-bx'>
            <label htmlFor="state">State</label>
            <select id="state">
              <option value="Lagos">Lagos</option>
              <option value="Oyo">Oyo</option>
              <option value="Ogun">Ogun</option>
              <option value="FCT">FCT</option>
            </select>
        </div>
      </div>
    </div>
  )
}
