import React , {useContext} from 'react'
import { Button, TextField , Select , MenuItem } from '@mui/material'
import { multiStepContext } from '../StepContext';

const Residence = () => {

   const {setStep , userData , setUserData} = useContext(multiStepContext)
   
  return (
    <div>
      <h3 className="title"> Residential Details </h3>
                  <div className="userdetails" id='postCode'>
                    <label className="form__label">Post Code </label>
                    <TextField className="form__input" type="text" value={userData['postcode']} onChange = {(e) => setUserData ({...userData , "postcode" : e.target.value})} placeholder="PostCode"/>
                   </div>

                   <div className="userdetails" id='address'>
                    <label className="form__label" >Address </label>
                    <TextField type="number" 
                        id='house-no'
                        class="form-control"  
                        placeholder="House Number"
                        value={userData['house-no']} onChange = {(e) => setUserData ({...userData , "house-no" : e.target.value})}required/>
  
                    <TextField type="number" 
                          id='flat-no'
                          class="form-control" 
                          placeholder="Flat Number (Optional)" 
                          value={userData['flat-no']} onChange = {(e) => setUserData ({...userData , "flat-no" : e.target.value})}
                          required/>
                    
                    <TextField type="text" 
                          id='house'
                          class="form-control" 
                          placeholder="House Name"
                          value={userData['house']} onChange = {(e) => setUserData ({...userData , "house" : e.target.value})}
                          required/>

                    <TextField type="street" 
                          id='street'
                          class="form-control" 
                          placeholder="Street" 
                          value={userData['street']} onChange = {(e) => setUserData ({...userData , "street" : e.target.value})}required/>
                    
                    <TextField type="city" 
                          id='city'
                          class="form-control"  
                          placeholder="City" 
                          value={userData['city']} onChange = {(e) => setUserData ({...userData , "city" : e.target.value})}required/>
                    
                    <TextField type="country" 
                          id='country'
                          class="form-control" 
                          placeholder="Country" 
                          value={userData['country']} onChange = {(e) => setUserData ({...userData , "country" : e.target.value})}required/>
                    </div>
                    <div className="userdetails" id='timeatthisaddress'>
                    <label className="form__label">Time At This Address </label>
                    <TextField 
                          id="years"
                          type="tel" 
                          class="form-control" 
                          placeholder="Years" 
                          size= "4"
                          minLength= "4"
                          maxlength = "4" 
                          value={userData['years']} onChange = {(e) => setUserData ({...userData , "years" : e.target.value})}required/>

                    <TextField type="number" 
                          class="form-control" 
                          placeholder="Months" 
                          size= "2"
                          minLength= "1"
                          maxlength = "2" 
                          value={userData['months']} onChange = {(e) => setUserData ({...userData , "months" : e.target.value})}required/>

                    </div>

                   <div className="userdetails" id='residential-status'>
                    <label className="form__label" >Residential Status </label>
                    <Select value={userData['residential-status']} onChange = {(e) => setUserData ({...userData , "residential-status" : e.target.value})} required>
                        <MenuItem value="home owner mortaged">Home Owner (Mortaged)</MenuItem>
                        <MenuItem value="home owner(mortage free)"> Home Owner (Mortage Free)</MenuItem>
                        <MenuItem value="unfurnished tenant">Unfurnished Tenant</MenuItem>
                        <MenuItem value="furnished tenant">Furnished Tenant</MenuItem>
                        <MenuItem value="living with parents">Living With Parents</MenuItem>
                        <MenuItem value="council tenant">Council Tenant</MenuItem>
                        <MenuItem value="other">Other</MenuItem>
                    </Select>
                    </div>
                    <Button variant="contained" onClick={()=>setStep(4)} style={{backgroundColor: 'rgb(255, 0, 0)', color: '#FFFFFF', padding: "11px 0px" , maxWidth: '200px', maxHeight: '30px', minWidth: '80px', minHeight: '40px',textAlign:'right' , margin: "20px"}}>Next</Button>

                    <Button variant="contained" onClick={()=>setStep(2)} style={{backgroundColor: 'rgb(255, 0, 0)', color: '#FFFFFF', padding: "11px 5px" , maxWidth: '200px', maxHeight: '30px', minWidth: '80px', minHeight: '40px' , margin: "20px" }}>Previous</Button>

            
    </div>
  )
}

export default Residence
