import React, { useContext } from 'react'
import Button from '@mui/material/Button';
import { multiStepContext } from '../StepContext';
import { Select, TextField , MenuItem } from '@mui/material';

const Loan = () => {

   const {setStep , userData , setUserData} = useContext(multiStepContext)

  return (
    <div>
      <h3 className='title'> Loan Details </h3>
      <div className='container'>
      <div className="userdetails" id='amount'>
         <label className="form__label" for="loan amount"> Loan Amount </label>
         <TextField className="form__label" type="number" label="Dollars" value = {userData['amount']} onChange = {(e) => setUserData ({...userData , "amount" : e.target.value})} size="10" minLength="1" maxLenght = "10" placeholder="$10000"  />
      </div>

      <div className="userdetails" id='frequency'>
                    <label className="form__label">Pay Frequency </label>
                    <Select value = {userData['frequency']} onChange = {(e) => setUserData ({...userData , "frequency" : e.target.value})} autoWidth required>
                        <MenuItem  value="12 months">12 Months</MenuItem>
                        <MenuItem  value="18 months">18 Months</MenuItem>
                        <MenuItem  value="2 years">2 years</MenuItem>
                        <MenuItem  value="3 years">3 years</MenuItem>
                        <MenuItem  value="4 years">4 years</MenuItem>
                        <MenuItem  value="5 years">5 years</MenuItem>
                        <MenuItem  value="6 years">6 years</MenuItem>
                        <MenuItem  value="7 years">7 years</MenuItem>
                        <MenuItem  value="8 years">8 years</MenuItem>
                        <MenuItem  value="10 years">10 years</MenuItem>
                        <MenuItem  value="12 years">12 years</MenuItem>
                        <MenuItem  value="15 years">15 years</MenuItem>
                        <MenuItem  value="20 years">20 years</MenuItem>
                    </Select>
      </div>

      <div className="userdetails" id='loanpurpose'>
                    <label className="form__label">Select Your Loan Purpose </label>
                    <Select value = {userData['loanpurpose']} onChange = {(e) => setUserData ({...userData , "loanpurpose" : e.target.value})} autoWidth required>
                        <MenuItem  value="holiday">Holiday</MenuItem>
                        <MenuItem  value="car">Car / Vehicle</MenuItem>
                        <MenuItem  value="debt">Debt Consolidation</MenuItem>
                        <MenuItem  value="home">Home Improvement</MenuItem>
                        <MenuItem  value="wedding">Wedding</MenuItem>
                        <MenuItem  value="other">Other</MenuItem>
                    </Select>
      </div>
      </div>
      <Button type='submit' variant="contained" onClick={()=>setStep(2)}  style={{backgroundColor: 'rgb(255, 0, 0)', color: '#FFFFFF', padding: "11px 0px" , maxWidth: '200px', maxHeight: '30px', minWidth: '80px', minHeight: '40px' , margin: "20px" }}>Next</Button>
    </div>
    
  )
}

export default Loan
