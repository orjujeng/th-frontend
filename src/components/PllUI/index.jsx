import React from 'react'
import { Fragment, useRef, useState } from 'react'
import './index.scss'
import pllimg from '../../assets/img/dreamer.svg'
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import {useNavigate} from 'react-router-dom'
export default function PllUI() {
    const [emailCheckState, setEmailCheckState] = useState({
    });
  
    const emailRef = useRef();
    const navigate = useNavigate();
  
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
    const goBack=()=>{
      navigate('/');
    }
  return (
    <Fragment>
      <div className="pllBox">
        <div className="pplImgBox">
          <img src={pllimg} alt="pllimg" />
        </div>
        <div className="resetPwBox">
          <TextField id="outlined-basic" label="Email" variant="outlined" className='inputLable' size="small" inputRef={emailRef} onChange={emailFormatCheck} {...emailCheckState} onBlur={emailFormatCheck} />
          <LoadingButton variant="contained"  sx={{
                textTransform: 'none',
                fontSize: '14px',
                fontWeight: '100',
                width:'90%'
              }}>Reset Password</LoadingButton>
          <LoadingButton variant="outlined"  sx={{
                textTransform: 'none',
                fontSize: '14px',
                fontWeight: '100',
                width:'90%',
                marginBottom:'30px'
              }} onClick={goBack}>Go Back</LoadingButton>
        </div>
      </div>
    </Fragment>
  )
}
