const { useContext, createContext, useState } = require("react");

const FormContext = createContext();

function ContextAPI({ children }) {
  const [step, setStep] = useState(1);

  function increaseStep() {
    if (step < 4) {
      setStep((prevStep) => prevStep + 1);
    }
  }

  function decreaseStep() {
    if (step > 1) {
      setStep((prevStep) => prevStep - 1);
    }
  }

  function jumpToStep(value) {
    setStep(value);
  }

  return (
    <FormContext.Provider
      value={{ step, increaseStep, decreaseStep, jumpToStep }}
    >
      {children}
    </FormContext.Provider>
  );
}

export function useGlobalContext() {
  return useContext(FormContext);
}

export default ContextAPI;
