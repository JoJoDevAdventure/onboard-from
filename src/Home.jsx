import { AnimatePresence } from "framer-motion";
import React, { useRef, useState } from "react";
import CustomBackButton from "./components/CustomBackButton";
import DesignerWorkView from "./components/DesignerWorkView";
import IntroView from "./components/IntroView";
import Navbar from "./components/NavBar";
import PersonalInfoView from "./components/PersonalInfoView";
import ProgressBar from "./components/ProgressBar";
import SoftwareUseView from "./components/SoftwareUseView";
import ThankYouView from "./components/ThankYouView";

const Home = () => {
  const [step, setStep] = useState(0);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    portfolio: "",
    linkedin: "",
    software: [],
    experience: [],
    designStyle: [],
    selectedMarketTargets: [],
    commissionRate: "",
  });

  const formRef = useRef(null);

  const handleNext = (newData) => {
    setFormData((prevData) => ({ ...prevData, ...newData }));
    if (step === 3) {
      console.log("Submitting...");
      // Trigger form submission when step 3 is completed
      setTimeout(() => {
        formRef.current.requestSubmit();
      }, 0);
    } else {
      setStep((prevStep) => prevStep + 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    // Append access key for email submission
    formData.append("access_key", "fbd9f17e-093c-4058-b3f9-ba3566bd37a3");

    try {
      // Submit to Web3Forms for email
      const emailResponse = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const emailData = await emailResponse.json();

      // Check response from Web3Forms
      if (emailData.success) {
        // Submit to Google Sheets
        const scriptURL = 'https://script.google.com/macros/s/AKfycbxoV8A2o8YSNJhpDrzlCnCJUIgr9OwrB6BeAVt9K05Yi4MejcDATxOprdPazsof8lqe/exec';
        const googleFormData = new FormData(form); // Use a new FormData object for Google Sheets

        const googleResponse = await fetch(scriptURL, {
          method: 'POST',
          body: googleFormData
        });

        if (googleResponse.ok) {
          setTimeout(() => {
      
          }, 5000);
          form.reset();
          setStep((prevStep) => prevStep + 1);
        } else {
          
          throw new Error("Failed to submit to Google Sheets");
        }
      } else {
        throw new Error(emailData.message);
      }
    } catch (error) {
      console.error("Error!", error.message);
      setMessage(`Error: ${error.message}`);
    }
  };

  const handleBack = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleStepChange = (index) => {
    setStep(index);
  };

  return (
    <div className="min-h-screen bg-[#9B4191] relative">
      <Navbar />
      <ProgressBar step={step} onStepChange={handleStepChange} />
      <AnimatePresence>
        {step === 0 && <IntroView onNext={handleNext} />}
        {step > 0 && step < 5 && (
          <div className={`relative ${step >= 4 ? "" : "pt-28"}`}>
            <CustomBackButton
              text="Back"
              onClick={handleBack}
              className={`top-8 left-40 absolute ${ step >= 4 ? "-z-10" : "z-20"}`}
            >
              Back
            </CustomBackButton>
            {step === 1 && <PersonalInfoView onNext={handleNext} />}
            {step === 2 && <SoftwareUseView onNext={handleNext} />}
            {step === 3 && <DesignerWorkView onNext={handleNext} />}
            {step === 4 && <ThankYouView formData={formData} />}
          </div>
        )}
      </AnimatePresence>
      <form
        ref={formRef}
        id="invisible-form"
        className="hidden"
        onSubmit={handleSubmit}
      >
        {Object.keys(formData).map((key) => (
          <input
            key={key}
            name={key}
            value={
              typeof formData[key] === "string"
                ? formData[key]
                : formData[key].join(", ")
            }
            readOnly
          />
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Home;
