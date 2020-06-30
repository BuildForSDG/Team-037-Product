import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './SponsorEditProfile.css';
import { updateUser } from '../../../api/auth';

const EditProfilePage = ({
  sponsorUser: {
    firstName,
    lastName,
    country,
    phone,
    imageUrl,
    state,
    address,
    city,
    dateOfBirth,
    accountName,
    accountNumber,
    bankName,
    userType,
    token
  }
}) => {
  const history = useHistory();
  const phoneRegex = RegExp(
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  );
  const [error, setError] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const updateUserType = async (newUserType, userToken) => {
    try {
      const values = { userType: newUserType };
      const userTypeData = await updateUser(values, userToken);
      const { status, data } = userTypeData;
      if (status == 200 && newUserType == 'sponsor') {
        localStorage.setItem('EmpowerFarmerUser', JSON.stringify(data));
        return history.push('/sponsorDashboard');
      }
      return history.push('/');
    } catch (e) {
      await setTimeout(() => {
        setError(true);
        setAlertMessage(e);
      }, 500);
    }
  };
  const formik = useFormik({
    initialValues: {
      firstName: firstName || '',
      lastName: lastName || '',
      country: country || '',
      phone: phone || '',
      imageUrl: imageUrl || '',
      state: state || '',
      address: address || '',
      city: city || '',
      dateOfBirth: dateOfBirth || '',
      accountName: accountName || '',
      accountNumber: accountNumber || '',
      bankName: bankName || '',
      userType: userType || ''
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(12, 'Must be 12 characters or less.'),
      lastName: Yup.string()
        .max(12, 'Must be 12 Characters or less'),
      address: Yup.string()
        .max(20, 'Must be 20 Characters or less'),
      country: Yup.string()
        .max(20, 'Must be 20 Characters or less'),
      city: Yup.string()
        .max(20, 'Must be 20 Characters or less'),
      dateOfBirth: Yup.string()
        .max(20, 'Must be 20 Characters or less'),
      accountName: Yup.string()
        .max(20, 'Must be 20 Characters or less'),
      accountNumber: Yup.string()
        .max(15, 'Must be 20 Characters or less'),
      backName: Yup.string()
        .max(20, 'Must be 20 Characters or less'),
      imageUrl: Yup.string(),
      phone: Yup.string()
        .max(15, 'phone number is too long.')
        .matches(phoneRegex, 'Invalid phone')
    }),
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const updateUserData = await updateUser(values, token);
        const { status, data } = updateUserData;
        if (status == 200) {
          localStorage.setItem('EmpowerFarmerUser', JSON.stringify(data));
          return history.push('/sponsorEditProfile');
        }
      } catch (error) {
        await setTimeout(() => {
          setError(true);
          setAlertMessage(error);
          setSubmitting(false);
        }, 500);
      }
    }
  });
  return (
        <div>
            <div className="editProfile">
                <div className="editProfile_form">
                    <form onSubmit = {formik.handleSubmit}>
                    { error ? <div className="error">{alertMessage} </div> : '' }
                        <h4>
                            Personal details:
                        </h4>
                        <div className="grid-container">
                            <div className="form-label-group">
                                <input
                                    type="text"
                                    id="firstName"
                                    className="form-control"
                                    name="firstName"
                                    placeholder="First Name"
                                    {...formik.getFieldProps('firstName')}
                                />
                                {formik.touched.firstName && formik.errors.firstName
                                  ? (<div className ='input-error mt-1 pl-3'>{formik.errors.firstName}</div>) : null
                                }
                                <label htmlFor="firstName">First Name</label>
                            </div>
                            <div className="form-label-group">
                                <input
                                        type="text"
                                        id="lastName"
                                        className="form-control"
                                        name="lastName"
                                        placeholder="Last Name"
                                        {...formik.getFieldProps('lastName')}
                                    />
                                    {formik.touched.lastName && formik.errors.lastName
                                      ? (<div className ='input-error mt-1 pl-3'>{formik.errors.lastName}</div>) : null
                                    }
                                <label htmlFor="lastName">Last Name</label>
                            </div>
                            <div className="form-label-group">
                                <input
                                    type="text"
                                        id="dateOfBirth"
                                        className="form-control"
                                        name="dateOfBirth"
                                        placeholder="DATE OF BIRTH"
                                        {...formik.getFieldProps('dateOfBirth')}
                                    />
                                    {formik.touched.dateOfBirth && formik.errors.dateOfBirth
                                      ? (<div className ='input-error mt-1 pl-3'>{formik.errors.dateOfBirth}</div>) : null
                                    }
                                <label htmlFor="dateOfBirth">Date Of Birth</label>
                            </div>
                            <div className="form-label-group">
                                <input
                                    type="tel"
                                    id="phone"
                                    className="form-control"
                                    placeholder="Phone Number"
                                    {...formik.getFieldProps('phone')}
                                />
                                {formik.touched.phone && formik.errors.phone
                                  ? (<div className ='input-error mt-1 pl-3'>{formik.errors.phone}</div>) : null
                                }
                                <label htmlFor="phone">Phone Number</label>
                            </div>
                            <div className="form-label-group">
                                <input
                                    type="text"
                                        id="country"
                                        className="form-control"
                                        name="country"
                                        placeholder="Country"
                                        {...formik.getFieldProps('country')}
                                    />
                                    {formik.touched.country && formik.errors.country
                                      ? (<div className ='input-error mt-1 pl-3'>{formik.errors.country}</div>) : null
                                    }
                                <label htmlFor="country">Country</label>
                            </div>
                            <div className="form-label-group">
                                <input
                                    type="text"
                                        id="state"
                                        className="form-control"
                                        name="state"
                                        placeholder="State"
                                        {...formik.getFieldProps('state')}
                                    />
                                    {formik.touched.state && formik.errors.state
                                      ? (<div className ='input-error mt-1 pl-3'>{formik.errors.state}</div>) : null
                                    }
                                <label htmlFor="state">State</label>
                            </div>
                            <div className="form-label-group">
                                <input
                                    type="text"
                                    id="city"
                                    className="form-control"
                                    name="city"
                                    placeholder="City"
                                    {...formik.getFieldProps('city')}
                                />
                                {formik.touched.city && formik.errors.city
                                  ? (<div className ='input-error mt-1 pl-3'>{formik.errors.city}</div>) : null
                                }
                                <label htmlFor="city">City</label>
                            </div>
                            <div className="form-label-group">
                                <input
                                    type="text"
                                    id="address"
                                    className="form-control"
                                    name="address"
                                    placeholder="Address"
                                    {...formik.getFieldProps('address')}
                                />
                                {formik.touched.address && formik.errors.address
                                  ? (<div className ='input-error mt-1 pl-3'>{formik.errors.address}</div>) : null
                                }
                                <label htmlFor="address">Address</label>
                            </div>
                        </div>

                        <h4>Bank details:</h4>
                        <div className="grid-container">
                            <div className="form-label-group">
                                <input
                                    type="text"
                                        id="accountName"
                                        className="form-control"
                                        name="accountName"
                                        placeholder="Account Name"
                                        {...formik.getFieldProps('accountName')}
                                    />
                                    {formik.touched.accountName && formik.errors.accountName
                                      ? (<div className ='input-error mt-1 pl-3'>{formik.errors.accountName}</div>) : null
                                    }
                                <label htmlFor="accountName">Account Name</label>
                            </div>
                            <div className="form-label-group">
                                <input
                                    type="text"
                                        id="accountNumber"
                                        className="form-control"
                                        name="accountNumber"
                                        placeholder="Account Number"
                                        {...formik.getFieldProps('accountNumber')}
                                    />
                                    {formik.touched.accountNumber && formik.errors.accountNumber
                                      ? (<div className ='input-error mt-1 pl-3'>{formik.errors.accountNumber}</div>) : null
                                    }
                                <label htmlFor="accountNumber">Account Number</label>
                            </div>
                            <div className="form-label-group">
                                <input
                                    type="text"
                                        id="backName"
                                        className="form-control"
                                        name="backName"
                                        placeholder="backName"
                                        {...formik.getFieldProps('backName')}
                                    />
                                    {formik.touched.backName && formik.errors.backName
                                      ? (<div className ='input-error mt-1 pl-3'>{formik.errors.backName}</div>) : null
                                    }
                                <label htmlFor="backName">Back Name</label>
                            </div>
                        </div>
                        <div className="updateButton">
                            <button type="submit">Update</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="accountType">
                <h4>Switch Account Type</h4>
                <div className="accountType_button">
                    <button onClick={() => updateUserType('farmer', token)}>Farmer</button>
                    <button onClick={() => updateUserType('sponsor', token)}>Sponsor</button>
                    <button onClick={() => updateUserType('buyer', token)}>Buyer</button>
                </div>
            </div>
        </div>
  );
};
export default EditProfilePage;
