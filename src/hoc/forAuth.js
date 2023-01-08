import React from 'react'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'


const WithAuth = Element=> {

    const ForAuth = (props)=>{
        return(
           props.auth.isAuth ? <Element {...props}/> : <Navigate to={'/'}/>
        )
    }
  return connect(({auth})=>({auth}))(ForAuth)
}

export default WithAuth