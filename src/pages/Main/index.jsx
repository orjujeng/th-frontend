import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom';
import Aside from '../../components/Aside'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { connect } from 'react-redux'
import { useEffect,useState } from 'react';
import { addInfoAction, clearInfoAction } from '../../redux/action/memberInfoAction'
import { useNavigate } from 'react-router-dom'
import { dashboradService } from '../../services/dashborad'
import '../../mocks/dashborad'
function Main(props) {
    const navigate = useNavigate();
    // const [period,setPeriod]=useState();
    const { username } = props.memberInfo;
    useEffect(() => {
        if (username === undefined) {
            navigate('/')
        } }
    ,[username, navigate])
    return (
        <Fragment>
            <Header/>
            <Aside />
            <Outlet />
            <Footer />
        </Fragment>
    )
}
export default connect(state => ({ memberInfo: state }),
    { addMemberInfo: addInfoAction, clearMemberInfo: clearInfoAction })(Main)
