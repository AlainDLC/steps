import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 👻",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  // React's best practices for state updates that depend on the previous state.
  function handleClickPrevious() {
    setStep((prevStep) => Math.max(prevStep - 1, 1));

    // if(step > 1)  setStep(step - 1);
  }

  function handleClickNext() {
    setStep((prevStep) => Math.min(prevStep + 1, 3));
  }
  function handleIsOpen() {
    setIsOpen((currentIsOpen) => !currentIsOpen);
  }

  return (
    <>
      <button className="close" onClick={handleIsOpen}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <Button
              type="button"
              bgColor="#00ff00"
              textColor="purple"
              onClick={handleClickPrevious}
            >
              <span>🔙</span>
              <span>Previous</span>
            </Button>

            <Button
              type="button"
              bgColor="#00ff00"
              textColor="purple"
              onClick={handleClickNext}
            >
              <span>Next</span>
              <span>🔜</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function Button({ onClick, bgColor, textColor, children, ...props }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{ backgroundColor: bgColor, color: textColor }}
      {...props}
    >
      {children}
    </button>
  );
}
