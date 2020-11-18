import {GET_FRONTUSERS, GET_FRONTUSER, GET_PASSENGERS, GET_PASSENGER, GET_COMPANIES, GET_COMPANY, GET_C_RIDES, GET_U_RIDES} from '../actions/bookingActions/bookTypes';

export const initialState = {
    frontUsers: [],
    frontUser: [],
    passengers:[],
    passenger:[],
    companies:[],
    company:[],
    c_rides:[],
    u_rides:[],
    loading: true,
    loadfrontuser:true,
    loadpassenger:true,
    loadrides:true,
    loadcompany:true, 
    // loadingcomp:true
  };
  
const bookingReducer = (state=initialState, action) => {
    switch (action.type) {
        case GET_FRONTUSERS:
            return {
                ...state,
                frontUsers:action.payload,
                loading: false
            };
        case GET_FRONTUSER:
            return {
                ...state,
                frontUser:action.payload,
                loadfrontuser: false
            };
        case GET_PASSENGERS:
            return {
                ...state,
                passengers:action.payload,
                loading: false
            };
        case GET_PASSENGER:
            return {
                ...state,
                passenger:action.payload,
                loadpassenger: false
            };
        case GET_COMPANIES:
            return {
                ...state,
                companies:action.payload,
                loadcompany: false
            };
        case GET_COMPANY:
            return {
                ...state,
                company:action.payload,
                loading: false
            };
        case GET_C_RIDES:
            return {
                ...state,
                c_rides:action.payload.Value,
                loadrides: false
            };
        case GET_U_RIDES:
            return {
                ...state,
                u_ride:action.payload.Value,
                loading: false
                };   
        default:
            return state
    }
};

export default bookingReducer;
