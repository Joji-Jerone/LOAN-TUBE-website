import React , {useContext} from 'react'
import { Button } from '@mui/material'
import { multiStepContext } from '../StepContext';

const Agreement = () => {

  const {setStep  } = useContext(multiStepContext)
  
  return (
    <div>
    <div className='agreement'>
      <h3 className="title">Policy Agreement</h3>
      <input type="checkbox" id="firstCheckbox" name="checkbox" value="Terms & Condition" required/>
      <label for="Terms & Condition"> Tick this box to confirm you agree to, and accept, our <a href='https://loremnotipsum.com/about/terms-and-conditions/'> Terms and Conditions</a>, <a href ='https://loremipsum.io/privacy-policy/</label>>Privacy Policy'>Privacy Policy </a> and <a href='www.loremipzum.com/en/cookies-policy'>Cookies Policy</a>, and that we and our partners may contact you about your loan enquiry and your experience by Text, email, phone and postal mail. </label> <br />
      <input type="checkbox" id="secondCheckbox" name="checkbox" value= "Lenders & Partners" required/>
      <label for="Lenders & Partners"> Tick this box to confirm you understand that the information you have provided will be shared with our panel of <a href='https://loremnotipsum.com'>lenders & partners</a> who will use it to check your eligibility for a loan. This will involve a soft credit search being carried out upon you, which will not affect your credit rating and it will not be visible to any third party. </label><br />
      I consent to receive information from LoanTube about relevant updates, latest products and services via selected communication methods:

      <div className='checkbox'>
      <input type="checkbox" name="email" value="email" required/>
      <label for="email"> Email</label>
      <input type="checkbox" name="sms" value="sms" required/>
      <label for="sms"> SMS </label>
      <input type="checkbox" name="call" value="call" required/>
      <label for="call"> Call </label> <br />
      </div>

      </div>
      <Button variant="contained" style={{backgroundColor: 'rgb(255, 0, 0)', color: '#FFFFFF', padding: "11px 0px" , maxWidth: '200px', maxHeight: '30px', minWidth: '150px', minHeight: '40px' , margin: "20px"}}>Check for loan</Button>

      <Button variant="contained" onClick={()=>setStep(5)} style={{backgroundColor: 'rgb(255, 0, 0)', color: '#FFFFFF', padding: "11px 5px" , maxWidth: '200px', maxHeight: '30px', minWidth: '80px', minHeight: '40px' , margin: "20px" }}>Previous</Button>
      </div>
    
  )
}

export default Agreement
