import React from 'react'
import './PersonalInfo.css'

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
        <input type="email" name='email' id='email' />
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
            <input type="text" name='state'/>
        </div>
      </div>
    </div>
  )
}
