import axios from 'axios';
import appConfig from '../config/appConfig';

const { BACKEND_PATH } = appConfig;

export const createUser = async (userPayload) => {
  try {
    const { ConfirmPassword, ...userData } = userPayload;
    const signUpApi = await axios.post(`${BACKEND_PATH}/auth/createUser`, userData);
    const { data } = signUpApi;
    return data;
  } catch (e) {
    const userResponse = JSON.parse(e.request.response);
    return userResponse;
  }
};
export const loginUser = async (formData) => {
  try {
    const { email, password } = formData;
    const loginData = { username: email, password }
    const signIn = await axios.post(`${BACKEND_PATH}/auth/signIn`, loginData);
    const { data } = signIn;
    return data;
  } catch (e) {
    const userResponse = JSON.parse(e.request.response);
    return userResponse;
  }
};
export const SignOut = () => {
  localStorage.removeItem('EmpowerFarmerUser');
  axios.get(`${BACKEND_PATH}/auth/logout`);
};
export const socialLogin = () => {
  axios.get(`${BACKEND_PATH}/auth/google`);
};
