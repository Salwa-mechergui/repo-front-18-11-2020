import {GET_FRONTUSERS, GET_FRONTUSER, GET_PASSENGERS, GET_PASSENGER, GET_COMPANIES, GET_COMPANY, GET_RIDE, GET_RIDES} from './bookTypes';
import axios from "axios";

export const searchUsers = (saas_company_id) => async dispatch => {
    console.log(process.env.REACT_APP_URL)
  try {
    const res = await axios.get(`/customer/${saas_company_id}`);
    console.log(res)
    dispatch({
      type: GET_FRONTUSERS,
      payload: res.data
    });
  } catch (error) {
    console.log(error);
  }
};

export const searchUserbyid = (saas_company_id, front_end_user_id) => async dispatch => {

  try {
    const res = await axios.get(`/customer/${saas_company_id}/${front_end_user_id}`);
    
    dispatch({
      type: GET_FRONTUSER,
      payload: res.data
    });
  } catch (error) {
    console.log(error);
  }
};

export const searchPassengers = (customer_id) => async dispatch => {
  try {
    const res = await axios.get(`/passenger/${customer_id}`);
    dispatch({
      type: GET_PASSENGERS,
      payload: res.data
    });
  } catch (error) {
    console.log(error);
  }
};

export const searchPassengerbyid = (customer_id, id) => async dispatch => {
  try {
    const res = await axios.get(`/passenger/${customer_id}/${id}`);
    dispatch({
      type: GET_PASSENGER,
      payload: res.data
    });
  } catch (error) {
    console.log(error);
  }
};
export const searchCompanies = (saas_company_id, customer_id) => async dispatch => {
  try {
    const res = await axios.get(`/company/${saas_company_id}/${customer_id}`);
    dispatch({
      type: GET_COMPANIES,
      payload: res.data
    });
  } catch (error) {
    console.log(error);
  }
};

export const searchCompanybyid = (saas_company_id, customer_id,company_id) => async dispatch => {
  try {
    const res = await axios.get(`/company/${saas_company_id}/${customer_id}/${company_id}`);
    console.log(res)
    dispatch({
      type: GET_COMPANY,
      payload: res.data
    });
  } catch (error) {
    console.log(error);
  }
};
export const searchRides = (saas_company_id, customer_id, state) => async dispatch => {
  try {
    const res = await axios.get(`/ride/${saas_company_id}/${customer_id}/${state}`);

    dispatch({
      type: GET_RIDES,
      payload: res.data
    });
  } catch (error) {
    console.log(error);
  }
};

// export const searchRidebyid = (saas_company_id, customer_id, id) => async dispatch => {
//   try {
//     const res = await axios.get(`/rides/${saas_company_id}/${customer_id}/${id}`);
//     dispatch({
//       type: GET_RIDE,
//       payload: res.data
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };
