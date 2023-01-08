import React from 'react'

import Router from "routes"
import Navbar from 'components/Navbar';
import Sidebar from 'components/Sidebar'
import { connect } from 'react-redux';
import Spinner from 'components/Spinner';
import { logout } from 'Action';




 class ServiceApp extends React.Component{
    handelLogout =()=> this.props.dispatch(logout())
    renderApp =(auth)=>
        <>
            <Navbar logout={this.handelLogout} auth={auth} id="navbar-main"/>
            <Navbar logout={this.handelLogout} auth={auth} id={'navbar-clone'}/>
            <Sidebar/>
            <Router/>
        </>

    render(){
        const {auth} =this.props
        return(
            auth.isAuthResolved ? this.renderApp(auth) :<Spinner/>
        )
    }
}
const getStateToProps =({auth})=>({auth})
export default connect(getStateToProps)(ServiceApp)