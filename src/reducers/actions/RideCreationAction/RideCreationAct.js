import {GET_VEHICULETYPE} from './RideCreationType';
import axios from "axios";

export const VehiculeType = (saas_company_id) => async dispatch => {
    console.log(process.env.REACT_APP_URL)
  try {
    const res = await axios.get(process.env.REACT_APP_URL+`/direction/${saas_company_id}`);
    console.log(res)
    dispatch({
      type: GET_VEHICULETYPE,
      payload: res.data
    });
  } catch (error) {
    console.log(error);
  }
};
