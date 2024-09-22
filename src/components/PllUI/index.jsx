import React from 'react'
import { Fragment, useRef, useState } from 'react'
import './index.scss'
import pllimg from '../../assets/img/dreamer.svg'
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import { useNavigate } from 'react-router-dom'
import { resetService } from '../../services/auth';
import Snackbar from '@mui/material/Snackbar';
export default function PllUI() {
  const [emailCheckState, setEmailCheckState] = useState({
  });
  const [msgPopUp,setmsgPopup] = useState({vertical:'top', horizontal:'right',open:false,msg:''})
  const { vertical, horizontal, open } = msgPopUp;
  const emailRef = useRef();
  const navigate = useNavigate();
  const [resetButtonState, setResetButtonState] = useState(false);
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
  const goBack = () => {
    navigate('/');
  }
  const reset = () => {
    let emailVaild = false

    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (emailRef.current.value == '') {
      setEmailCheckState({
        error: 'error',
        defaultValue: "Email",
        helperText: "Email is required!"
      })
    } else {
      if (emailRegex.test(emailRef.current.value)) {
        setEmailCheckState({})
        emailVaild = true
      } else {
        setEmailCheckState({
          error: 'error',
          defaultValue: "Email",
          helperText: "Invalid Email address!"
        })
      }
    }
    if (emailVaild) {
      const param = {
        email: emailRef.current.value
      }
      setResetButtonState(true)
      resetService(JSON.stringify(param)).then((result) => {

        if (result.data.code == '200') {
          setmsgPopup({ vertical: 'top', horizontal: 'right', open: true, msg: 'Reset Successful' })
          setResetButtonState(false);
        } else if (result.data.code != '200') {
          setmsgPopup({ vertical: 'top', horizontal: 'right', open: true, msg: 'User Not Exsiting' })
          setResetButtonState(false);
        } else {
          setResetButtonState(false)
        }
      }).catch((error) => {
        setmsgPopup({ vertical: 'top', horizontal: 'right', open: true, msg: 'Network with Issue,Please Try again later' })
        setResetButtonState(false)
      });
    
  } 
}
const msgPopupClose = () => {
  setmsgPopup({ vertical: 'top', horizontal: 'right', open: false, msg: '' })
}

return (
  <Fragment>
    <div className="pllBox">
      <div className="pplImgBox">
        <img src={pllimg} alt="pllimg" />
      </div>
      <div className="resetPwBox">
        <TextField id="outlined-basic" label="Email" variant="outlined" className='inputLable' size="small" inputRef={emailRef} onChange={emailFormatCheck} {...emailCheckState} onBlur={emailFormatCheck} />
        <LoadingButton variant="contained" sx={{
          textTransform: 'none',
          fontSize: '14px',
          fontWeight: '100',
          width: '90%'
        }} onClick={reset} loading={resetButtonState}>Reset Password</LoadingButton>
        <LoadingButton variant="outlined" sx={{
          textTransform: 'none',
          fontSize: '14px',
          fontWeight: '100',
          width: '90%',
          marginBottom: '30px'
        }} onClick={goBack}>Go Back</LoadingButton>
      </div>
    </div>
    <Snackbar
        anchorOrigin={{ vertical, horizontal}}
        open={open}
        autoHideDuration={5000}
        message={msgPopUp.msg}
        onClose={msgPopupClose}
      />
  </Fragment>
)
}
