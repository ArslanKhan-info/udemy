import React from "react";
import { Formik } from "formik";
import { RegisterValidation } from "helper/validations";
import { register } from "helper/initialValues";
import { useDispatch } from "react-redux";
import { registerAction } from "Action";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import WithoutAuth from "hoc/forGuest";


const  Register =()=>{
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const registerUser = (userData)=>{
    registerAction(userData)
      .then(res=>{
        toast.success("User register successfully")
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
            <h3 className="title has-text-grey">Register</h3>
            <p className="subtitle has-text-grey">Please Register to proceed.</p>
            <div className="box">
              <figure className="avatar">
                <img src="https://placehold.it/128x128" alt="logo Img"/>
              </figure>
              <Formik 
                initialValues={register}
                validationSchema={RegisterValidation}
                onSubmit={values=>{
                  registerUser(values)
                }}
                >
                {formikObject=>{
                  return(
                    <form onSubmit={formikObject.handleSubmit}>
                      <div className="field">
                        <div className="control">
                          <input name="email"
                                className="input is-large"
                                type="email"
                                placeholder="Your Email"
                                autoFocus=""
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
                          <input name="fullName"
                                id="fullName"
                                className="input is-large"
                                type="text"
                                placeholder="Full Name"
                                onChange={formikObject.handleChange}
                                onBlur={formikObject.handleBlur}
                                value={formikObject.values.fullName}/>
                        <div className="form-error">
                          {formikObject?.touched?.fullName && formikObject?.errors?.fullName &&
                            <span className="help is-danger">{formikObject.errors.fullName}</span>}
                          </div>
                        </div>
                      </div>
                      <div className="field">
                        <div className="control">
                          <input name="avatar"
                                className="input is-large"
                                type="text"
                                placeholder="Avatar"
                                id="avatar"
                                onChange={formikObject.handleChange}
                                onBlur={formikObject.handleBlur}
                                value={formikObject.values.avatar}/>
                        <div className="form-error">
                          {formikObject?.touched?.avatar && formikObject?.errors?.avatar &&
                            <span className="help is-danger">{formikObject.errors.avatar}</span>}
                          </div>
                        </div>
                      </div>
                      <div className="field">
                        <div className="control">
                          <input name="password"
                                className="input is-large"
                                type="password"
                                placeholder="Your Password"
                                id="password"
                                autoComplete="current-password" 
                                onChange={formikObject.handleChange}
                                onBlur={formikObject.handleBlur}
                                value={formikObject.values.password} />
                          <div className="form-error">
                          {formikObject?.touched?.password && formikObject?.errors?.password &&
                            <span className="help is-danger">{formikObject.errors.password}</span>}
                          </div>
                        </div>
                      </div>
                      <div className="field">
                        <div className="control">
                          <input name="passwordConfirmation"
                                className="input is-large"
                                type="password"
                                id="passwordConfirmation"
                                placeholder="Repeat Password"
                                autoComplete="current-password" 
                                onChange={formikObject.handleChange}
                              onBlur={formikObject.handleBlur}
                              value={formikObject.values.passwordConfirmation}/>
                        <div className="form-error">
                          {formikObject?.touched?.passwordConfirmation && formikObject?.errors?.passwordConfirmation &&
                            <span className="help is-danger">{formikObject.errors.passwordConfirmation}</span>}
                          </div>
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="button is-block is-info is-large is-fullwidth">Register</button>
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
    )
  }

  export default WithoutAuth(Register)