import { AnimatePresence } from "framer-motion";
import React, { useRef, useState } from "react";
import CustomBackButton from "./components/CustomBackButton";
import DesignerWorkView from "./components/DesignerWorkView";
import IntroView from "./components/IntroView";
import LoadingScreen from "./components/LoadingScreen"; // Import the LoadingScreen component
import Navbar from "./components/NavBar";
import PersonalInfoView from "./components/PersonalInfoView";
import ProgressBar from "./components/ProgressBar";
import SoftwareUseView from "./components/SoftwareUseView";
import ThankYouView from "./components/ThankYouView";

const Home = () => {
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false); // State for loading screen
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
    isCommissionBasedModel: false,
  });

  const formRef = useRef(null);

  const handleNext = (newData) => {
    setFormData((prevData) => ({ ...prevData, ...newData }));
    if (step === 3) {
      console.log("Submitting...");
      setLoading(true); // Show loading screen
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
            form.reset();
            setStep((prevStep) => prevStep + 1);
            setLoading(false); // Hide loading screen
          }, 5000);
        } else {
          throw new Error("Failed to submit to Google Sheets");
        }
      } else {
        throw new Error(emailData.message);
      }
    } catch (error) {
      console.error("Error!", error.message);
      setLoading(false); // Hide loading screen on error
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
              className={`${step >= 4 ? "hidden" : "block"}`}
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
              Array.isArray(formData[key])
                ? formData[key].join(", ")
                : typeof formData[key] === "boolean"
                ? formData[key] ? "Yes" : "No"
                : formData[key]
            }
            readOnly
          />
        ))}
        <button type="submit">Submit</button>
      </form>
      {loading && <LoadingScreen />} {/* Show loading screen */}
    </div>
  );
};

export default Home;