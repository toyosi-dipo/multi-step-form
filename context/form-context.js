import { toast } from "react-toastify";

const { useContext, createContext, useState } = require("react");

const FormContext = createContext();
const initialFormData = {
  first_name: "",
  middle_name: "",
  surname: "",
  d_o_b: "",
  marital_status: "",
  department: "",
  position: "",
  supervisor: "",
  phone: "",
  email: "",
  street_address: "",
  city: "",
  state: "",
  zip: "",
  high_school: "",
  h_s_from: "",
  h_s_to: "",
  h_s_degree: "",
  h_s_city: "",
  h_s_state: "",
  college: "",
  col_from: "",
  col_to: "",
  col_degree: "",
  col_city: "",
  col_state: "",
  emg_name: "",
  emg_relationship: "",
  emg_phone: "",
};

function ContextAPI({ children }) {
  const [step, setStep] = useState(1);
  const [filledFormData, setFilledFormData] = useState(initialFormData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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

  function updateFormData(e) {
    const name = e.target.name;
    const value = e.target.value;
    const newFilledFormData = { ...filledFormData, [name]: value };
    setFilledFormData(() => newFilledFormData);
  }

  function modalHandler() {
    setIsModalOpen(!isModalOpen);
  }

  async function submitHandler(e) {
    e.preventDefault();
    setIsLoading(true);
    const id = toast.loading("Submitting data, Please wait...");
    //do something else
    setTimeout(() => {
      toast.update(id, {
        render: "Data submitted successfully",
        type: "success",
        isLoading: false,
      });
      setTimeout(() => {
        toast.dismiss(id);
      }, 3000);
      setStep(1);
      modalHandler();
      setIsLoading(false);
      setFilledFormData(initialFormData);
    }, 3500);
  }

  return (
    <FormContext.Provider
      value={{
        step,
        increaseStep,
        decreaseStep,
        jumpToStep,
        filledFormData,
        updateFormData,
        isModalOpen,
        modalHandler,
        submitHandler,
        isLoading,
        setFilledFormData,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export function useGlobalContext() {
  return useContext(FormContext);
}

export default ContextAPI;
