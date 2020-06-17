import axios from 'axios';
import appConfig from '../config/appConfig';

const { BACKEND_PATH } = appConfig;

const createUser = async (userPayload) => {
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

export default createUser;
