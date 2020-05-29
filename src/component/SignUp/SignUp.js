import React from 'react';
import {NavLink} from 'react-router-dom';
import  './Signup.css';
import {useFormik} from 'formik';
import * as Yup from 'yup';



const SignUp = () =>{

        const formik = useFormik({
            initialValues: {
                firstName: '',
                lastName: '',
                email: '',
                phoneNumber: '',
                password: '', 
                ConfirmPassword: '',
            },

            validationSchema: Yup.object({
                firstName: Yup.string()
                            .required('Required')
                            .max(12, 'Must be 15 characters or less.'),
                lastName: Yup.string()
                             .required('Required')
                             .max(12, 'Must be 12 Characters or less'),
                email:    Yup.string()
                             .email('Please provide a valid email address')
                             .required('Email Required'),
                phoneNumber: Yup.string()
                                .min(9, 'Phone Number is too short')
                                .max(15, 'Phone Number too long')
                                .required('phone number is required'),    
                password: Yup.string()
                             .required('password is required')
                             .min(6, 'password must be minimum of 6 characters')
                             .matches(/(?=.*[0-9])/, "Password must contain a number."),

                ConfirmPassword: Yup.string()
                                    .oneOf([Yup.ref('password'), null], 'Passwords must match')
                                    .required('confirm the password')
            }),
            onSubmit: async (values, {setSubmitting, resetForm}) => {
                    await setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                        resetForm();
                    }, 500);
            }
        });

        return (
            <div className="container wrapper">
                <div className="row py-5 mt-4 align-items-center">
                 <div className="col-md-5 pr-lg-5 mb-5 mb-md-0">
                        <img src="https://res.cloudinary.com/mhmd/image/upload/v1569543678/form_d9sh6m.svg" alt="" className="img-fluid mb-3 d-none d-md-block" />
                        <h2 className ='text-center'>Create an Account</h2>
                        <p className=" text-center font-italic text-muted mb-0">Register your information so that you can have access</p>
                   </div>

                <div className="col-md-7 col-lg-6 ml-auto">
                <div className="card-body">
                <form className="form-signin" onSubmit = {formik.handleSubmit}>
                    <div className ="form-row">
                        <div className = 'col-md-6'>
                            <div className="form-label-group">
                            <input
                                type="text" 
                                id="firstName" 
                                name="firstName" 
                                className="form-control" 
                                placeholder="First Name"
                                {...formik.getFieldProps('firstName')}
                            />
                            {formik.touched.firstName && formik.errors.firstName ? 
                                (<div className ='input-error mt-1 pl-3'>{formik.errors.firstName}</div>) : null
                              }
                            <label htmlFor="firstName">First Name</label>
                         </div>
                      </div>
                        <div className = 'col-md-6'>
                            <div className="form-label-group">
                            <input
                                type="text" 
                                id="lastName" 
                                className="form-control" 
                                placeholder="LastName" 
                                {...formik.getFieldProps('lastName')}
                            />
                            {formik.touched.lastName && formik.errors.lastName ? 
                                (<div className ='input-error mt-1 pl-3'>{formik.errors.lastName}</div>) : null
                              }
                            <label htmlFor="lastName">Last Name</label>
                         </div>
                      </div>
                    </div>
    
                  <div className="form-label-group">
                    <input 
                        type="email" 
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
                        type="tel" 
                        id="phoneNumber" 
                        className="form-control" 
                        placeholder="Phone Number"
                        {...formik.getFieldProps('phoneNumber')}
                    />
                    {formik.touched.phoneNumber && formik.errors.phoneNumber ? 
                        (<div className ='input-error mt-1 pl-3'>{formik.errors.phoneNumber}</div>) : null
                      }
                    <label htmlFor="phoneNumber">Phone Number</label>
                  </div>
                  
                  <div className ="form-row">
                    <div  className ="col-md-6">
                       <div className="form-label-group">
                         <input 
                            type="password" 
                            id="password" 
                            className="form-control" 
                            placeholder="Password"
                            {...formik.getFieldProps('password')}
                         />
                         {formik.touched.password && formik.errors.password ? (
                           <div className ='input-error mt-1 pl-3' >{formik.errors.password}</div>
                         ): null}
                         <label htmlFor="password">Password</label>
                        </div>
                      </div>
                    <div  className ="col-md-6">
                      <div className="form-label-group">
                         <input 
                            type="password" 
                            id="ConfirmPassword" 
                            className="form-control" 
                            placeholder="Password"
                            {...formik.getFieldProps('ConfirmPassword')}
                         />
                         {formik.touched.ConfirmPassword && formik.errors.ConfirmPassword ? (
                          <div className ='input-error mt-1 pl-3' >{formik.errors.ConfirmPassword}</div>
                        ): null}
                         <label htmlFor="ConfirmPassword">Confirm password</label>
                     </div>
                   </div>
                  </div>
                     <div className= 'row justify-content-center '> 
                      <div className ="col-lg-8">
                      <button 
                        className="btn btn-lg  btn-success btn-block text-uppercase" type="submit"
                        onClick = {() => resetForm(formik.initialValues)}>
                        Create your account
                      </button>
                      </div>
                 </div>
                  <div className="form-group col-lg-12 mx-auto d-flex align-items-center my-4">
                    <div className="border-bottom w-100 ml-5"></div>
                        <span className="px-2 small text-muted font-weight-bold text-muted">OR</span>
                        <div className="border-bottom w-100 mr-5"></div>
                    </div>
                    <div className ="row justify-content-center">
                        <div className ='col-lg-8'>
                            <button className="btn btn-google btn-block text-uppercase mb-3" type="submit"><i className="fab fa-google mr-2"></i> Sign up with Google</button>
                        </div>
                    </div>
                    <div className="text-center w-100">
                        <p className="text-muted font-weight-bold">Already Registered? <NavLink to ='/login' className="text-primary ml-2">Login</NavLink>
                        </p>
                  </div>
                </form>
              </div>
                 </div>
             </div>
          </div>
     )
}

export default SignUp;
