import React, { Fragment } from 'react'
import { Outlet} from 'react-router-dom';
import Aside from '../../components/Aside'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function Main() {

    return (
        <Fragment>
            <Header />
            <Aside/>
            <Outlet/>
            <Footer />
        </Fragment>
    )
}
