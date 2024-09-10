import React, { Fragment } from 'react'
import { Outlet} from 'react-router-dom';
import Aside from '../../components/Aside'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import {connect} from 'react-redux'
import { useEffect } from 'react';
import { addInfoAction, clearInfoAction } from '../../redux/action/memberInfoAction'
import { useNavigate } from 'react-router-dom'

 function Main(props) {
    const navigate = useNavigate()
    const { username } = props.memberInfo; 
    console.log("Username is undefined:", username === undefined);
    useEffect(()=>{
        console.log("useEffect triggered, username:", username);
        if(username===undefined){
            navigate('/')
        }
    },[username,navigate])
    return (
        <Fragment>
            <Header />
            <Aside/>
            <Outlet/>
            <Footer />
        </Fragment>
    )
}
export default connect(state => ({ memberInfo: state }),
{ addMemberInfo: addInfoAction, clearMemberInfo: clearInfoAction })(Main)
