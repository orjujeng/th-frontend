import React, { Fragment, useRef, useState } from 'react'
import { NavLink,Navigate,Route,Routes,useNavigate} from 'react-router-dom'
import './index.scss'
import uilib from '../../assets/img/ui-lib.png'
import google from '../../assets/img/google.svg'
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import LoadingButton from '@mui/lab/LoadingButton';
import {addInfoAction,getInfoAction,clearInfoAction} from '../../redux/action/memberInfoAction'
// import Button from '@mui/material/Button';
import {connect} from 'react-redux'
 function LoginUI(props) {

  const [emailCheckState, setEmailCheckState] = useState({
  });

  const [pwdCheckState, setPwdCheckState] = useState({
  });

  const emailRef = useRef();

  const pwdRef = useRef();

  const navigate = useNavigate();

  const emailFormatCheck = () => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    emailRef.current.value == '' ? setEmailCheckState({
      error: true,
      defaultValue: "Email",
      helperText: "Email is required!"
    }) : emailRegex.test(emailRef.current.value) ? setEmailCheckState({}) : setEmailCheckState({
      error: true,
      defaultValue: "Email",
      helperText: "Invalid Email address!"
    })
  }

  const pwdFormatCheck = () => {
    const pwdRegex = /^.{7}$/
    pwdRef.current.value === '' ? setPwdCheckState({
      error: true,
      defaultValue: "Password",
      helperText: "Password is required!"
    }) : pwdRegex.test(pwdRef.current.value) ? setPwdCheckState({}) : setPwdCheckState({
      error: true,
      defaultValue: "Password",
      helperText: "Password must be 7 character length!"
    })
  }
  const login = ()=>{
    pwdFormatCheck();
    emailFormatCheck();
    if(JSON.stringify(pwdCheckState)===JSON.stringify(emailCheckState)&&JSON.stringify(emailCheckState)===JSON.stringify({})){
      navigate('/main');
      props.addMemberInfo({1:1})
    }
  }
  return (
    <Fragment>
      <div className="loginBody"></div>
      <div className='loginBox'>
        <div className="projectInfo">
          <div className="title">
            <span class="iconfont">&#xe76a;</span>
            <span className='projectName'>TimeSheet</span>
          </div>
          <div className="desc">TimeSheet Dashboard</div>
          <div className="items">
            <ul>
              <li>Fill in your TimeSheet</li>
              <li>Check the project code & Organised code</li>
              <li>Gov the member info</li>
            </ul>
          </div>
          <div className="placeholder"></div>
          <div className="icon">
            <img src={uilib} alt="UI Lib Logo" />
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
            <TextField id="outlined-basic" label="Email" variant="outlined" className='inputLable' size="small" inputRef={emailRef} onChange={emailFormatCheck} {...emailCheckState} onBlur={emailFormatCheck} />
            <TextField id="outlined-basic" label="Password" variant="outlined" className='inputLable' type="password" size="small" inputRef={pwdRef} onChange={pwdFormatCheck} {...pwdCheckState} onBlur={pwdFormatCheck} />
            <div className="pll">
              <div className="rmbme">
                <Checkbox defaultChecked />
                Remember Me
              </div>
              <div className="fp">
                <NavLink to="/problemLogin">Forget password?</NavLink>
              </div>
            </div>
            <div className="loginbtnBox">
              <LoadingButton variant="contained" sx={{
                textTransform: 'none',
                fontSize: '14px',
                fontWeight: '100'
              }} onClick={login}>Login</LoadingButton>
            </div>
            <div className="reg">
              Don't have an account?&nbsp;
              <div className="regRouter">
                <NavLink to="/register" >Register</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Routes>
        <Route path='/register' element={<Navigate to="/register" replace/>}/>
        <Route path='/problemLogin' element={<Navigate to="/problemLogin" replace/>}/>
      </Routes>
    </Fragment>
  )
}
export default connect(state=>({memberInfo:state}),
  {getMemberInfo:getInfoAction,addMemberInfo:addInfoAction,clearMemberInfo:clearInfoAction}
)(LoginUI)