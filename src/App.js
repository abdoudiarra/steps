import { useState } from "react";

  const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
  ];


export default function App(){

  const [step, stepState] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  //const [test, handleName] = useState({name : "Abdou"}); 

  function handlePrevious(){
    if(step > 1) stepState((currentStep) => currentStep - 1);
  }
  function handleNext(){
    if(step < 3){
      stepState((currentStep) => currentStep + 1);      
    } 

    //BAD PRACTICE
    //test.name = "testname";

    //handleName({name: "bob"})
  }

  return (
    <div> 
      <button className="close" onClick={() => setIsOpen(is => !is)}>
          &times;
      </button>


      {isOpen && (
      <div className="steps">
        <div className="numbers">
          <div className={`${step >= 1 ? "active" : ""}`}>1</div>
          <div className={`${step >= 2 ? "active" : ""}`}>2</div>
          <div className={`${step >= 3 ? "active" : ""}`}>3</div>
        </div>

        <p className="message">Step {step}: {messages[step-1]} </p>

        <div className="buttons">
          <button style={{backgroundColor: "#7950f2", color: "#fff"}} onClick={handlePrevious}>
            Previous
          </button>
          <button style={{backgroundColor: "#7950f2", color: "#fff"}} onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
      )}
    </div>
  )
}

