import React from 'react'
import './styles/summary.css'

export default function Summary() {
  return (
    <div id='summary-box'>
      <div id='summary-hd' className='row'>
        <div id='hd-txt'>
          <div>Item Name</div>
          <div id='price'><svg width="50" height="47" viewBox="0 0 50 47" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M46.6306 14.1936V12.0473H44.2942V6.71455H41.5148V12.0473H32.1976L26.2108 6.74085V6.71429H23.4314V12.047H21.095V14.1934H23.4314V16.0714H21.095V18.2177H23.4314V23.4997H26.2108V18.2179H35.5155L41.4971 23.5L41.5152 23.4952V23.5H44.2945V18.2179H46.631V16.0716H44.2945V14.1936H46.6306ZM26.2108 10.0014L28.5274 12.0473H26.2108V10.0014ZM26.2108 16.0716V14.1936H30.9583L33.0849 16.0716H26.2108ZM41.5148 20.3055L39.1593 18.2179H41.5148V20.3055ZM41.5148 16.0716H36.7377L34.6188 14.1936H41.5148V16.0716Z" fill="#F2F2F2"/>
              </svg>Price</div>
        </div>
      </div>
      <div id='items'>
        <div className='row'>
          <div className='colored'>Data science and usability</div>
          <div className='num colored'>50,000.00</div>
        </div>
        <div className='row'>
          <div className='colored'>Shipping</div>
          <div>0.00</div>
        </div>
      </div>
      <hr id='summary-line' />
      <div id='total'>
        <div className='row total'>
          <div>Total</div>
          <div className='num colored'>50,000.00</div>
        </div>
      </div>
    </div>
  )
}
