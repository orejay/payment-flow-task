import './App.css';
import BillingInfo from './forms/BillingInfo';
import './forms/PersonalInfo'
import PersonalInfo from './forms/PersonalInfo';
import React, { useState } from 'react';

function Content(){
  const [step, setStep] = useState(0);
  function Header(){
    return(
      <div id='header'>
        <div id='head'>
          <h3>Complete your Purchase</h3>
        </div>
        <div id='nav'>
          <ul>
            <li className='active-nav'>Personal Info</li>
            <li>Billing Info</li>
            <li>Confirm Payment</li>
          </ul>
        </div>
      </div>
    )
  }
  function Form(){
  if (step === 0){
    return <PersonalInfo/>
    } 
  else if (step === 1){
    return<BillingInfo/>
    }
  }
  let buttonText;
  if (step === 0 || step === 1){ buttonText = 'Next'}
  return(
    <div>
      <Header/>
      <Form/>
      <div id='buttons'>
        <button id='next-btn' onClick={()=>{setStep(step + 1)}}>{buttonText}</button>
        <p>Cancel Payment {step}</p>
      </div>
    </div>
  )
}


function App() {
  return (
    <div className="App">
     <Content/>
    </div>
  );
}

export default App;
