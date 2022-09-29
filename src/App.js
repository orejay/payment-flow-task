import "./App.css";
import BillingInfo from "./stepsDisplay/BillingInfo";
import PurchaseComplete from "./stepsDisplay/PurchaseComplete";
import "./stepsDisplay/PersonalInfo";
import PersonalInfo from "./stepsDisplay/PersonalInfo";
import React, { useState } from "react";
import Summary from "./stepsDisplay/Summary";

function Content() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({
    name: "",
    email: "",
    address1: "",
    address2: "",
    lg: "",
    state: "",
  });
  function Header() {
    return (
      <div id="header" className={`${step === 3 ? "hidden" : ""}`}>
        <div id="head">
          <h3>Complete your Purchase</h3>
        </div>
        <div id="nav">
          <ul>
            <li className={`${step === 0 ? "active-nav" : ""}`}>
              Personal Info
            </li>
            <li className={`${step === 1 || step === 2 ? "active-nav" : ""}`}>
              Billing Info
            </li>
            <li className={`${step === 3 ? "active-nav" : ""}`}>
              Confirm Payment
            </li>
          </ul>
          <hr id="head-line" />
        </div>
      </div>
    );
  }
  function Screen() {
    // logic that controls which screen is displayed to the user based on the step they are on
    if (step === 0) {
      return <PersonalInfo data={data} setData={setData} />;
    } else if (step === 1) {
      return <BillingInfo />;
    } else if (step === 2) {
      return <Summary />;
    } else if (step === 3) {
      return <PurchaseComplete />;
    }
  }
  let buttonText;
  // change the button based on the step the user is on
  if (step === 0 || step === 1) {
    buttonText = "Next";
  } else if (step === 2) {
    buttonText = "Pay";
  }

  function Button() {
    return (
      <div id="buttons">
        <button
          id="next-btn"
          onClick={() => {
            let satisfied;
            // check if the flow is in the first 2 steps
            if (step === 0 || step === 1) {
              satisfied = false;
            } else {
              satisfied = true;
            }
            const forms = document.getElementsByClassName("required");
            for (let form of forms) {
              // set satisfied to true for every filled required field
              if (form.value) {
                satisfied = true;
              } else {
                satisfied = false;
                form.style.border = "1px solid red";
              }
            }
            if (satisfied) {
              setStep(step + 1);
            } else {
              window.alert("Please fill in all required feilds");
            }
          }}
          // hide buttons on confirmation screen
          className={`${step === 3 ? "hidden" : ""}`}
        >
          {buttonText}
        </button>
        <a href="/" id="cancel" className={`${step === 3 ? "hidden" : ""}`}>
          Cancel Payment
        </a>
      </div>
    );
  }
  return (
    <div className="content">
      <Header />
      <Screen />
      <Button />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Content />
    </div>
  );
}

export default App;
