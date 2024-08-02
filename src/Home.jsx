import { AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import CustomBackButton from './components/CustomBackButton';
import DesignerWorkView from './components/DesignerWorkView';
import IntroView from './components/IntroView';
import Navbar from './components/NavBar';
import PersonalInfoView from './components/PersonalInfoView';
import ProgressBar from './components/ProgressBar';
import SoftwareUseView from './components/SoftwareUseView';
import ThankYouView from './components/ThankYouView';

const Home = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    portfolio: "",
    linkedin: "",
    software: [],
    experience: [],
    designStyle: [],
  });

  const handleNext = (newData) => {
    setFormData({ ...formData, ...newData });
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
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
          <div className="relative pt-28">
            <CustomBackButton text="Back" onClick={handleBack} className="absolute top-8 left-40">Back</CustomBackButton>
            {step === 1 && <PersonalInfoView onNext={handleNext} />}
            {step === 2 && <SoftwareUseView onNext={handleNext} />}
            {step === 3 && <DesignerWorkView onNext={handleNext} />}
            {step === 4 && <ThankYouView formData={formData} />}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;