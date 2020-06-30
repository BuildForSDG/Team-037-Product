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
    const loginData = { username: email, password };
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
const removeEmpty = (obj) => {
  Object.keys(obj).forEach((key) => obj[key] == '' && delete obj[key]);
};
export const updateUser = async (updateData, token) => {
  try {
    const config = {
      headers: {
        Authorization: token,
        'Content-Type': 'multipart/form-data'
      }
    };
    removeEmpty(updateData);
    const formData = new FormData();
    formData.append('imageUrl', updateData);
    const updateUserData = await axios.patch(`${BACKEND_PATH}/auth/updateUser`, formData, config);
    const { data } = updateUserData;
    return data;
  } catch (e) {
    const userResponse = JSON.parse(e.request.response);
    return userResponse;
  }
};
