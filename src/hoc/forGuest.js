import React from 'react'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'


const WithoutAuth = Element=> {

    const ForGuest = (props)=>{
        return(
           props.auth.isAuth ?  <Navigate to={'/'}/> : <Element {...props}/> 
        )
    }
  return connect(({auth})=>({auth}))(ForGuest)
}

export default WithoutAuth