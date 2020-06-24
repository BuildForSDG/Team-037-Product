import React, { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import appConfig from '../../config/appConfig';
import './Verify.css';

const { BACKEND_PATH } = appConfig;

const VerifyStatus = () => {
  const history = useHistory();
  const [message, setMessage] = useState('');
  const [requestSuccess, setRequestSuccess] = useState(false);
  const [error, setError] = useState(false);
  const user = JSON.parse(localStorage.getItem('EmpowerFarmerUser'));
  useEffect(() => {
    const token = new URLSearchParams(location.search).get('token');
    if (token) {
      axios.get(`${BACKEND_PATH}/auth/verify/email?token=${token}`)
        .then((res) => {
          const newUser = { ...user, verified: true };
          localStorage.setItem('EmpowerFarmerUser', JSON.stringify(newUser));
          const msg = res.data.message;
          setMessage(msg);
          setError(false);
          history.push('/sponsorDashboard');
        })
        .catch((err) => {
          setRequestSuccess(true);
          const msg = err.response.data.error;
          setMessage(msg);
          setError(true);
        });
    }
  }, []);
  return (
    <div className="verifyUser">
      <img className="mail-icon" src="https://img.icons8.com/cotton/128/000000/delivered-mail.png" alt="Delivered mail" />
      <h6> Thanks for registering </h6>
      <p>
        {!requestSuccess ? 'Please wait, we’re currently verifying your account now' : null}
        {' '}
        {!requestSuccess ? (
          <svg width="200px" height="200px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" className="lds-dual-ring" style={{ background: 'none' }}><circle cx="50" cy="50" ng-attr-r="{{config.radius}}" ng-attr-stroke-width="{{config.width}}" ng-attr-stroke="{{config.stroke}}" ng-attr-stroke-dasharray="{{config.dasharray}}" fill="none" strokeLinecap="round" r="40" strokeWidth="4" stroke="#e42e3b" strokeDasharray="62.83185307179586 62.83185307179586" transform="rotate(299.916 50 50)"><animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;360 50 50" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite" /></circle></svg>
        ) : null}
      </p>
      <span>
        {message}
      </span>
    </div>
  );
};

export default VerifyStatus;
