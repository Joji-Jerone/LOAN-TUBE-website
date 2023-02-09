import React , {useContext} from 'react';
import './App.css';
import './Components/Customer'
import Customer from './Components/Customer';
import Residence from './Components/Residence';
import Finance from './Components/Finance';
import Password from './Components/Password';
import Agreement from './Components/Agreement';
import Loan from './Components/Loan';
import { Stepper , StepLabel , Step} from "@mui/material"
import { multiStepContext } from './StepContext';

function App() {
  const {currentStep} = useContext(multiStepContext)
  function showStep(step) {
    switch(step) {
      case 1 : return <Loan />
      case 2 : return <Customer />
      case 3 : return <Residence />
      case 4 : return <Finance />
      case 5 : return <Password /> 
      case 6 : return <Agreement />

      default : return <h1>Loan Tube Page Loading</h1>
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Loan Tube</h1>
        </header>
      <div className='center-stepper'>
      <Stepper style = {{width: '30%' , height:"30%" }} activeStep= {currentStep-1}orientation='horizontal'>
        <Step>
          <StepLabel></StepLabel>
        </Step>
        <Step>
          <StepLabel></StepLabel>
        </Step>
        <Step>
          <StepLabel></StepLabel>
        </Step>
        <Step>
          <StepLabel></StepLabel>
        </Step>
        <Step>
          <StepLabel></StepLabel>
        </Step>
        <Step>
          <StepLabel></StepLabel>
        </Step>
      </Stepper>
      </div>
      { showStep(currentStep)}
      <footer>
        {`LoanTube ® 2023 All Rights Reserved.`}
      </footer>
    </div>
  );
}

export default App;
