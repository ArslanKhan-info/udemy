import React from "react";
import { Formik } from "formik";
import {logininti} from 'helper/initialValues'
import { loginValidation } from "helper/validations";
import { loginAction } from "Action";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import WithoutAuth from "hoc/forGuest";



const Login =()=>{
  const navigate = useNavigate()
  const login =(userData)=>{
    loginAction(userData)
    .then(res=>{
      toast.success("Login successfully")
      navigate('/')
    })
    .catch(err=>{
      toast.error(err)
    })
  }



    return (
    <div className="auth-page">
      <div className="container has-text-centered">
        <div className="column is-4 is-offset-4">
          <h3 className="title has-text-grey">Login</h3>
          <p className="subtitle has-text-grey">Please login to proceed.</p>
          <div className="box">
            <figure className="avatar">
              <img src="https://placehold.it/128x128"  alt="logo image"/>
            </figure>
            <Formik 
              onSubmit={(values)=>{
                login(values)
              }}
              initialValues={logininti}
              validationSchema={loginValidation}
              >
              {formikObject=>{
                return(
                  <form onSubmit={formikObject.handleSubmit}>
                    <div className="field">
                      <div className="control">
                        <input className="input is-large"
                              type="email"
                              placeholder="Your Email"
                              autoFocus=""
                              name="email"
                              id='email'
                              onChange={formikObject.handleChange}
                              onBlur={formikObject.handleBlur}
                              value={formikObject.values.email}
                              autoComplete="email" />
                        <div className="form-error">
                          {formikObject?.touched?.email && formikObject?.errors?.email &&
                            <span className="help is-danger">{formikObject.errors.email}</span>}
                        </div>
                      </div>
                    </div>
                    <div className="field">
                      <div className="control">
                        <input className="input is-large"
                              type="password"
                              name="password"
                              id='password'
                              placeholder="Your Password"
                              onChange={formikObject.handleChange}
                              onBlur={formikObject.handleBlur}
                              value={formikObject.values.password}
                              autoComplete="current-password" />
                        <div className="form-error">
                          {formikObject?.touched?.password && formikObject?.errors?.password &&
                            <span className="help is-danger">{formikObject.errors.password}</span>}
                        </div>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="button is-block is-info is-large is-fullwidth">Sign In</button>
                  </form>
                )
              }}
            </Formik>
          </div>
          <p className="has-text-grey">
            <a>Sign In With Google</a>&nbsp;
            <a href="/">Sign Up</a> &nbsp;·&nbsp;
            <a href="../">Need Help?</a>
          </p>
        </div>
      </div>
    </div>
  )}

  export default WithoutAuth(Login)
