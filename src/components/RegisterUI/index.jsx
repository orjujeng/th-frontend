import React from 'react'
import { Fragment, useRef, useState } from 'react'
import { NavLink,Navigate,Route,Routes } from 'react-router-dom'
import './index.scss'

import google from '../../assets/img/google.svg'
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import LoadingButton from '@mui/lab/LoadingButton';
import deviceimg from '../../assets/img/posting_photo.svg'
export default function RegisterUI() {
  const [emailCheckState, setEmailCheckState] = useState({
  });

  const emailRef = useRef();

  const emailFormatCheck = () => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    emailRef.current.value == '' ? setEmailCheckState({
      error: 'error',
      defaultValue: "Email",
      helperText: "Email is required!"
    }) : emailRegex.test(emailRef.current.value) ? setEmailCheckState({}) : setEmailCheckState({
      error: 'error',
      defaultValue: "Email",
      helperText: "Invalid Email address!"
    })
  }
  return (
    <Fragment>
      <div className='loginBox'>
        <div className="regInfo">
          <div className="deviceImgBox">
            <img src={deviceimg} alt="device image"/>
          </div>
        </div>
        <div className="loginInfo">
          <div className="googleBox">
            <div className="gcontext">
              <span className="gicon"><img src={google} alt="Google Logo" /></span>
              <span className="ginfo"> Temporary Unavailable</span>
            </div>
          </div>
          <div className="or">
            <hr />
          </div>
          <div className="loginform">
            <TextField id="outlined-basic" label="Email" variant="outlined" className='inputLable' size="small" inputRef={emailRef} onChange={emailFormatCheck} {...emailCheckState} onBlur={emailFormatCheck}/>
            <div className="pll">
              <div className="rmbme">
                <Checkbox defaultChecked />
                I have read and agree to the terms of service.
              </div>
              
            </div>
            <div className="loginbtnBox">
              <LoadingButton variant="contained" sx={{
                textTransform: 'none',
                fontSize: '14px',
                fontWeight: '100'
              }}>Register</LoadingButton>
            </div>
            <div className="reg">
              Already have an account?&nbsp;
              <div className="regRouter">
                <NavLink to="/Login" >Login</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Routes>
        <Route path='/Login' element={<Navigate to="/Login" replace/>}/>
      </Routes>
    </Fragment>
  )
}
