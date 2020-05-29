import React, { Component } from 'react';
import './login.css';
import login_img from './login_img.png';
import *  as Yup from 'yup';
import {useFormik} from 'formik';

const Login = () => {

    const formik = useFormik({
      initialValues: {
        email: '',
        password: ''
      },
      validationSchema: Yup.object({
        email:  Yup.string()
                .email('Invalid email address format')
                .required('Email is required'),
        password: Yup.string()
                  .required('Password is required')
                  .min(3,'password must be minimum of 3 characters')
     } 
   ),
   onSubmit: async (values, {resetForm, setSubmitting}) => {
    await setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
        resetForm();
    }, 400);
  }
});

    return (
         <div className="container wrapper">
            <div className="row no-gutter wrapper">
              <div className="d-none d-md-flex col-md-6 bg-image">
                    <img src ={login_img} alt =''  className ='img-fluid'/>
              </div>
              <div className="col-md-6">
                <div className="login d-flex align-items-center py-5">
                  <div className="container">
                    <div className="row">
                       <div className="col-md-9 col-lg-8 mx-auto">
                         <h2 className="login-heading mb-4 text-center">Log in to your account</h2>
                           <form onSubmit = {formik.handleSubmit}>
                                <div className="form-label-group">
                                <input
                                    id="inputEmail" 
                                    className="form-control" 
                                    placeholder="Email address" 
                                    {...formik.getFieldProps('email')}
                                />
                                {formik.touched.email && formik.errors.email ?
                                  (<div className ='input-error mt-1 pl-3'>{formik.errors.email}</div>) : null
                                }
                                <label htmlFor="inputEmail">Email address</label>
                                </div>

                                <div className="form-label-group">
                                    <input 
                                        type="password" 
                                        id="inputPassword"
                                        className="form-control" 
                                        placeholder="Password" 
                                        {...formik.getFieldProps('password')}
                                    />
                                    {formik.touched.password && formik.errors.password ? 
                                      (<div className ='input-error mt-1 pl-3'>{formik.errors.password}</div>) : null
                                    }
                                    <label htmlFor="inputPassword">Password</label>
                                </div>

                                <div className="custom-control custom-checkbox mb-3">
                                    <input 
                                        type="checkbox" 
                                        className="custom-control-input" 
                                        id="customCheck1"
                                 />
                                    <label className="custom-control-label" htmlFor="customCheck1">Remember password</label>
                                </div>
                                <button className="btn btn-success btn-block btn-login mb-2" type="submit"
                                onClick = {() => resetForm(formik.initialValues)}
                                >Login</button>
                                <div className="text-center">
                                    <a className="small" href="#">Forgot password?</a>
                                    
                                </div>
                            </form>
                        </div>
                      </div>
                   </div>
                </div>
              </div>
            </div>
         </div>
    )
}

export default Login;
