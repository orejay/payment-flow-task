import './App.css';
import BillingInfo from './stepsDisplay/BillingInfo';
import PurchaseComplete from './stepsDisplay/PurchaseComplete';
import './stepsDisplay/PersonalInfo'
import PersonalInfo from './stepsDisplay/PersonalInfo';
import React, { useState } from 'react';
import Summary from './stepsDisplay/Summary';


function Content(){
  const [step, setStep] = useState(0);
  function Header(){
    return(
      <div id='header' className={`${step === 3 ? 'hidden' : ''}`}>
        <div id='head'>
          <h3>Complete your Purchase</h3>
        </div>
        <div id='nav'>
          <ul>
            <li className={`${step === 0 ? 'active-nav' : ''}`}>Personal Info</li>
            <li className={`${(step === 1 || step === 2) ? 'active-nav' : ''}`}>Billing Info</li>
            <li className={`${step === 3 ? 'active-nav' : ''}`}>Confirm Payment</li>
          </ul>
          <hr id='head-line'/>
        </div>
      </div>
    )
  }
  function Form(){
    if (step === 0){
      return <PersonalInfo/>;
    } 
    else if (step === 1){
      return<BillingInfo/>;
    }
    else if(step === 2){
      return<Summary/>;
    }
    else if(step === 3){
      return<PurchaseComplete/>;
    }
  }
  let buttonText;
  if (step === 0 || step === 1){
     buttonText = 'Next'
    }
    else if (step === 2){
      buttonText = 'Pay'
    }

  function Button(){
    return (
      <div id='buttons'>
        <button id='next-btn' onClick={()=>{setStep(step + 1)}} className={`${step === 3 ? 'hidden' : ''}`}>{buttonText}</button>
        <p className={`${step === 3 ? 'hidden' : ''}`}>Cancel Payment {step}</p>
      </div>
    )
  }
  return(
    <div>
      <Header/>
      <Form/>
      <Button/>
    </div>
  )
}


function App() {
  return (
    <div className="App">
    <purchaseComplete/>
     <Content/>
    </div>
  );
}

export default App;
