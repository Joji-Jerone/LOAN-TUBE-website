import React , {useState} from 'react'
import App from './App';

export const multiStepContext = React.createContext();
   const StepContext = () => {
      const [currentStep,setStep] = useState(1);
      const [userData, setUserData] = useState([])

  return (
    <div>
      <multiStepContext.Provider value = {{currentStep,setStep,userData, setUserData}} >
         <App />
      </multiStepContext.Provider>
    </div>
  )
  }


export default StepContext
