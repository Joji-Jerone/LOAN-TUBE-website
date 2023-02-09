import React, {useContext} from 'react'
import { multiStepContext } from '../StepContext';
import { Button , TextField} from '@mui/material';


const Password = () => {

  const {setStep} = useContext(multiStepContext)

  return (
    <div>
      <h3 className="title">Create Your Password</h3>

      <div className='password'> 
      Before we find a loan for you, let’s create a password <br /> 

      This means we can save your loan search history for you so you can access it anytime. <br /> 


      Create a memorable password <br /> 

      Should be minimum 8 characters <br /> 

      Should contain at least 1 number <br /> 
          <div className="userdetails">
              <label for="pwd">Password:</label>
              <TextField type="password" id="pwd" name="pwd" required/>
          </div>
      </div>
      <Button variant="contained" onClick={()=>setStep(6)} style={{backgroundColor: 'rgb(255, 0, 0)', color: '#FFFFFF', padding: "11px 0px" , maxWidth: '200px', maxHeight: '30px', minWidth: '80px', minHeight: '40px' ,margin: "20px" }}>Next</Button>

      <Button variant="contained" onClick={()=>setStep(4)} style={{backgroundColor: 'rgb(255, 0, 0)', color: '#FFFFFF', padding: "11px 5px" , maxWidth: '200px', maxHeight: '30px', minWidth: '80px', minHeight: '40px' ,  margin: "20px"}}>Previous</Button>

    </div>
  )
}

export default Password
