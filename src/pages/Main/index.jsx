import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom';
import Aside from '../../components/Aside'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { connect } from 'react-redux'
import { useEffect } from 'react';
import { addInfoAction, clearInfoAction } from '../../redux/action/memberInfoAction'
import { useNavigate } from 'react-router-dom'
import '../../mocks/dashborad'
import Snackbar from '@mui/material/Snackbar';
function Main(props) {
    const navigate = useNavigate();
    // const [period,setPeriod]=useState();
    const { username } = props.memberInfo;
    useEffect(() => {
        if (username === undefined) {
            navigate('/')
        }else{
            setmsgPopup({ vertical: 'top', horizontal: 'right', open: true, msg: 'Login Successful' })
        }
        
    }
    , [username, navigate])
    const [msgPopUp, setmsgPopup] = React.useState({ vertical: 'top', horizontal: 'right', open: false, msg: '' });
    const { vertical, horizontal, open } = msgPopUp;

    const msgPopupClose = () => {
        setmsgPopup({ vertical: 'top', horizontal: 'right', open: false, msg: '' })
    }
    return (
        <Fragment>
            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={open}
                autoHideDuration={5000}
                message={msgPopUp.msg}
                onClose={msgPopupClose}
            />
            <Header />
            <Aside />
            <Outlet context={{ setMainMsgPopup: setmsgPopup }}/>
            <Footer />
        </Fragment>
    )
}
export default connect(state => ({ memberInfo: state }),
    { addMemberInfo: addInfoAction, clearMemberInfo: clearInfoAction })(Main)
