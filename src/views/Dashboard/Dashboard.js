import "./dashbord.css"
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";

import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";

import React, { useEffect, useState } from "react";
// import "./Booking.css";
import {
  searchUsers,
  searchUserbyid,
  searchPassengers,
  searchPassengerbyid,
  searchCompanies,
  searchCompanybyid,
  searchCurrentRides,
  searchUpcomingRides,
} from "../../reducers/actions/bookingActions/bookAction";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import useAutocomplete from '@material-ui/lab/useAutocomplete';
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import styled from 'styled-components';
import CloseIcon from '@material-ui/icons/Close';
import NoSsr from '@material-ui/core/NoSsr';
import CheckIcon from '@material-ui/icons/Check';
import { BallBeat } from 'react-pure-loaders';
// import Ride from "../../components/Booking/Ride"
import Checkout from "components/Checkout/Checkout";


const useStyles = makeStyles(styles);

const Label = styled('label')`
  padding: 0 0 4px;
  line-height: 1.5;
  display: block;
`;

const InputWrapper = styled('div')`
  width: 200px;
  border: 1px solid #d9d9d9;
  background-color: #fff;
  border-radius: 4px;
  padding: 1px;
  display: flex;
  flex-wrap: wrap;

  &:hover {
    border-color: #40a9ff;
  }

  &.focused {
    border-color: #40a9ff;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }

  & input {
    font-size: 14px;
    height: 30px;
    box-sizing: border-box;
    padding: 4px 6px;
    width: 0;
    min-width: 30px;
    flex-grow: 1;
    border: 0;
    margin: 0;
    outline: 0;
  }
`;

const Tag = styled(({ label, onDelete, ...props }) => (
  <div {...props}>
    <span>{label}</span>
    <CloseIcon onClick={onDelete} />
  </div>
))`
  display: flex;
  align-items: center;
  height: 24px;
  margin: 2px;
  line-height: 22px;
  background-color: #fafafa;
  border: 1px solid #e8e8e8;
  border-radius: 2px;
  box-sizing: content-box;
  padding: 0 4px 0 10px;
  outline: 0;
  overflow: hidden;

  &:focus {
    border-color: #40a9ff;
    background-color: #e6f7ff;
  }

  & span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  & svg {
    font-size: 12px;
    cursor: pointer;
    padding: 3px;
  }
`;

const Listbox = styled('ul')`
  width: 300px;
  margin: 2px 0 0;
  padding: 0;
  position: absolute;
  list-style: none;
  background-color: #fff;
  overflow: auto;
  max-height: 250px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 1;

  & li {
    padding: 5px 12px;
    display: flex;

    & span {
      flex-grow: 1;
    }

    & svg {
      color: transparent;
    }
  }

  & li[aria-selected='true'] {
    background-color: #fafafa;
    font-weight: 600;

    & svg {
      color: #1890ff;
    }
  }

  & li[data-focus='true'] {
    background-color: #e6f7ff;
    cursor: pointer;

    & svg {
      color: #000;
    }
  }
`;

function Dashboard(props) {


  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Checkout />
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default (Dashboard);





// // react plugin for creating charts
// import ChartistGraph from "react-chartist";
// import "./dashbord.css"
// // @material-ui/core
// import { makeStyles } from "@material-ui/core/styles";
// import Icon from "@material-ui/core/Icon";
// // @material-ui/icons
// import Store from "@material-ui/icons/Store";
// import Warning from "@material-ui/icons/Warning";
// import DateRange from "@material-ui/icons/DateRange";
// import LocalOffer from "@material-ui/icons/LocalOffer";
// import Update from "@material-ui/icons/Update";
// import ArrowUpward from "@material-ui/icons/ArrowUpward";
// import AccessTime from "@material-ui/icons/AccessTime";
// import Accessibility from "@material-ui/icons/Accessibility";
// import BugReport from "@material-ui/icons/BugReport";
// import Code from "@material-ui/icons/Code";
// import Cloud from "@material-ui/icons/Cloud";
// // core components
// import GridItem from "components/Grid/GridItem.js";
// import GridContainer from "components/Grid/GridContainer.js";
// import Table from "components/Table/Table.js";
// import Tasks from "components/Tasks/Tasks.js";
// import CustomTabs from "components/CustomTabs/CustomTabs.js";
// import Danger from "components/Typography/Danger.js";
// import Card from "components/Card/Card.js";
// import CardHeader from "components/Card/CardHeader.js";
// import CardIcon from "components/Card/CardIcon.js";
// import CardBody from "components/Card/CardBody.js";
// import CardFooter from "components/Card/CardFooter.js";

// import { bugs, website, server } from "variables/general.js";

// import {
//   dailySalesChart,
//   emailsSubscriptionChart,
//   completedTasksChart,
// } from "variables/charts.js";
// import React, { useEffect, useState } from "react";
// // import "./Booking.css";
// import {
//   searchUsers,
//   searchUserbyid,
//   searchPassengers,
//   searchPassengerbyid,
//   searchCompanies,
//   searchCompanybyid,
//   searchCurrentRides,
//   searchUpcomingRides,
// } from "../../reducers/actions/bookingActions/bookAction";
// import { connect } from "react-redux";
// import { NativeSelect, FormControl } from "@material-ui/core";
// import TextField from "@material-ui/core/TextField";
// import Autocomplete from "@material-ui/lab/Autocomplete";
// import useAutocomplete from '@material-ui/lab/useAutocomplete';
// import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
// import styled from 'styled-components';
// import CloseIcon from '@material-ui/icons/Close';
// import NoSsr from '@material-ui/core/NoSsr';
// import CheckIcon from '@material-ui/icons/Check';
// import { BallBeat } from 'react-pure-loaders';
// import company from 'assets/img/company.png';
// import { SMALL } from "material-ui/utils/withWidth";


// const useStyles = makeStyles(styles);

// const Label = styled('label')`
//   padding: 0 0 4px;
//   line-height: 1.5;
//   display: block;
// `;

// const InputWrapper = styled('div')`
//   width: 200px;
//   border: 1px solid #d9d9d9;
//   background-color: #fff;
//   border-radius: 4px;
//   padding: 1px;
//   display: flex;
//   flex-wrap: wrap;

//   &:hover {
//     border-color: #40a9ff;
//   }

//   &.focused {
//     border-color: #40a9ff;
//     box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
//   }

//   & input {
//     font-size: 14px;
//     height: 30px;
//     box-sizing: border-box;
//     padding: 4px 6px;
//     width: 0;
//     min-width: 30px;
//     flex-grow: 1;
//     border: 0;
//     margin: 0;
//     outline: 0;
//   }
// `;

// const Tag = styled(({ label, onDelete, ...props }) => (
//   <div {...props}>
//     <span>{label}</span>
//     <CloseIcon onClick={onDelete} />
//   </div>
// ))`
//   display: flex;
//   align-items: center;
//   height: 24px;
//   margin: 2px;
//   line-height: 22px;
//   background-color: #fafafa;
//   border: 1px solid #e8e8e8;
//   border-radius: 2px;
//   box-sizing: content-box;
//   padding: 0 4px 0 10px;
//   outline: 0;
//   overflow: hidden;

//   &:focus {
//     border-color: #40a9ff;
//     background-color: #e6f7ff;
//   }

//   & span {
//     overflow: hidden;
//     white-space: nowrap;
//     text-overflow: ellipsis;
//   }

//   & svg {
//     font-size: 12px;
//     cursor: pointer;
//     padding: 3px;
//   }
// `;
// const Listbox = styled('ul')`
//   width: 300px;
//   margin: 2px 0 0;
//   padding: 0;
//   position: absolute;
//   list-style: none;
//   background-color: #fff;
//   overflow: auto;
//   max-height: 250px;
//   border-radius: 4px;
//   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
//   z-index: 1;

//   & li {
//     padding: 5px 12px;
//     display: flex;

//     & span {
//       flex-grow: 1;
//     }

//     & svg {
//       color: transparent;
//     }
//   }

//   & li[aria-selected='true'] {
//     background-color: #fafafa;
//     font-weight: 600;

//     & svg {
//       color: #1890ff;
//     }
//   }

//   & li[data-focus='true'] {
//     background-color: #e6f7ff;
//     cursor: pointer;

//     & svg {
//       color: #000;
//     }
//   }
// `;

// function Dashboard(props) {
//   const classes = useStyles();
//   const [data, setData] = useState(false);
//   const [i, setI] = useState(0);
//   const [spinner, setSpinner] = useState(true);
//   const [spinnercompany, setSpinnercompany] = useState(true);

//   const [ridespinner, setRideSpinner] = useState(true);
//   const [passengerspiner, setpassengerspiner] = useState(true);
//   const [selected, setSelected] = useState(false);
//   const [selectedpassenger, setSelectedpassenger] = useState(false);
//   const [frontuser, setfrontuser] = useState([]);
//   const [passenger, setPassenger] = useState([]);
//   const [crides, setcrides] = useState([]);
//   const [urides, seturides] = useState([]);
//   const [userData, setUserData] = useState(false);
//   const [companyData, setCompanyData] = useState(false);
//   const [passengerData, setPassengerData] = useState(false);
//   const [userSpinner, setuserSpinner] = useState(true);
//   const {
//     getRootProps,
//     getInputLabelProps,
//     getInputProps,
//     getTagProps,
//     getListboxProps,
//     getOptionProps,
//     groupedOptions,
//     value,
//     focused,
//     setAnchorEl,
//   } = useAutocomplete({
//     id: 'customized-hook-demo',
//     defaultValue: [props.companies.referral],
//     multiple: true,
//     options: props.companies,
  
//   });
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setSpinner(props.load);
//     }, 1000);
//     return () => clearTimeout(timer);
//   }, [spinner]);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setSpinner(props.loadcompany);
//     }, 1000);
//     return () => clearTimeout(timer);
//   }, [spinnercompany]);

//   useEffect(() => {
//     props.searchUsers(1);
//     setData(true);
//   }, [data]);

//   const handleChange = async (id, v) => {
//     console.log(v);
//     let value = v || {
//       id_customer: 11235,
//       saas_company_id: 1,
//       front_end_user_id: 11075,
//       first_name: "Mohammed",
//       last_name: "Ahmed12",
//       email: "mohammed.test111@gmail.com",
//       phone_number: "+21626859658",
//       default_passenger_id: "32912",
//     };
//     let idCustumer = value.id_customer || 1;
//     await props.searchUserbyid(1, idCustumer);
//     props.searchPassengers(idCustumer);
//     props.searchCompanies(1, idCustumer);
//     props.searchCurrentRides(1, idCustumer, "way_to");
//     props.searchUpcomingRides(1, idCustumer, "not dispatched");
//     setSelected(true);
//     setUserData(true);
//     setfrontuser(props.frontUser);
//     setcrides(props.c_rides);
//     seturides(props.u_rides);
//     setSpinner(props.loadfrontuser);
//     setRideSpinner(props.loadrides);
//   };

//   const handleChangePassenger = async (id, v) => {
//     console.log(v);
//     await props.searchPassengerbyid(v.id, v.passenger_id);
//     setSelectedpassenger(true);
//     setPassengerData(true);
//     // setCompanyData(true);
//     setPassenger(props.passenger);
//     setpassengerspiner(props.loadpassenger);
//   };

//   const handleChangeCompany = async (id,v) => {
// console.log(v)
// props.searchCompanybyid(1,v.customer_id,v.company_id)

//   };

//   return (
//     <div>
//       <GridContainer>
//         <GridItem xs={12} sm={6} md={3}>
//           <div className="ridecreation">
//             <div className="formControl">
//               {/* <RideCreation /> */}
//               {spinner && !data ? (
//                 <rn color="#123abc" loading />
//               ) : (
//                 <div>
//                 <h5>Search customer</h5>
//                 <Autocomplete
//                   options={props.frontUsers}
//                   id="cc"
//                   getOptionLabel={(options) =>
//                     options.first_name + " " + options.last_name || ""
//                   }
//                   style={{ width: 300 }}
//                   onChange={(e, v) => handleChange(e.target.id.split("-"), v)}
//                   renderInput={(params) => (
//                     <TextField
//                       {...params}
//                       label="Search customer"
//                       variant="outlined"
//                     />
//                   )}
//                 /></div>
//               )}
//               {selected ? (
//                   <Autocomplete
//                     options={props.passengers}
//                     id="cc"
//                     getOptionLabel={(options) =>
//                       options.first_name + " " + options.last_name || ""
//                     }
//                     style={{ width: 300 }}
//                     onChange={(e, v) =>
//                       handleChangePassenger(e.target.id.split("-"), v)
//                     }
//                     renderInput={(params) => (
//                       <TextField
//                         {...params}
//                         label="passengers"
//                         variant="outlined"
//                       />
//                     )}
//                   />):null}
//                   {console.log(props.companies.length)}
//                     { selected && props.companies.length!=0? 
//                    <Autocomplete
//                     options={props.companies}
//                     id="cc"
//                     getOptionLabel={(options) =>
//                       options. Name  || ""
//                     }
//                     style={{ width: 300 }}
//                     onChange={(e, v) =>
//                       handleChangeCompany(e.target.id.split("-"), v)
//                     }
//                     renderInput={(params) => (
//                       <TextField
//                         {...params}
//                         label="companies"
//                         variant="outlined"
//                       />
//                     )}
//                     />
//                  :null}
//             </div>
//             <div>
//               {userSpinner && !userData  ? (
//                 <BallBeat
//                 color={'#123abc'}
//               />
//                // <img
//                 //   className="spiner"
//                 //   src="https://svgshare.com/i/EmH.svg"
//                 //   alt=""
//                 // />
//               ) : (
//                 <div className="dataoutput">
//                   {/* <img id="img-caract" src={company} alt={company} /> */}
//                    <h5> <font size="3" face="georgia" color="blue">Business customer</font></h5>
//                   <h5>first name:{props.frontUser[0].first_name}</h5>
//                   <h5>last name:{props.frontUser[0].last_name}</h5>
//                   <h5>email: {props.frontUser[0].email}</h5>
//                   <h5>phone:{props.frontUser[0].phone_number}</h5>
//                   {props.companies.comment!=null? (
//                   <div>
//                   {props.companies &&
//                     props.companies.map((el) =>(
//                       <div>
//                         <h5>comment :{el.comment}</h5>
//                       </div>
//                     ))}
//                     </div>
//                     ):"no comment"}
//               <NoSsr>
//                 <div>
//                 <div {...getRootProps()}>
//                   <Label {...getInputLabelProps()}>Referral Code</Label>
//                     <InputWrapper ref={setAnchorEl} className={focused ? 'focused' : ''}>
//                      <h5>{props.frontUser[0].referral_code}</h5>
//                     </InputWrapper>
//                 </div>
//                   {groupedOptions.length > 0 ? (
//                   <Listbox {...getListboxProps()}>
//                   {groupedOptions.map((option, index) => (
//                   <li {...getOptionProps({ option, index })}>
//                     <span>{option.title}</span>
//                     <CheckIcon fontSize="small" />
//                   </li>
//                   ))}
//                   </Listbox>
//                   ) : null}
//               </div>
//               </NoSsr>
//               <div>
//               <h5>current rides :</h5>
//                 {props.c_rides.length!=0 ?
//                 <div>
//                   ({props.c_rides && props.c_rides.map((el) => (
//                     <span>{el.request_id},</span>
//                     ))})
//                 </div>
//                  :"no rides"}
//               </div>
//                 <h5>upcoming rides :</h5>
//                 <div>
//                 {props.u_rides.length!=0 ?
//                 <div>
//                   ({props.u_rides && props.u_rides.map((el) => (
//                     <span><a href="">{el.request_id}</a>,</span>
//                     ))})
//                 </div>
//                  :"no rides"}
//               </div>
//                 </div>
//               )}
               
//             </div>
//           </div>
//         </GridItem>
//       </GridContainer>
//     </div>
//   );
// }
// const mapStateToProps = (state) => ({
//   frontUsers: state.bookingReducer.frontUsers,
//   frontUser: state.bookingReducer.frontUser,
//   load: state.bookingReducer.loading,
//   loadpassenger: state.bookingReducer.loadfrontuser,
//   passengers: state.bookingReducer.passengers,
//   passenger: state.bookingReducer.passenger,
//   companies: state.bookingReducer.companies,
//   loadcompany: state.bookingReducer.loadcompany,
//   loadingcomp: state.bookingReducer.loadingcomp,
//   c_rides: state.bookingReducer.c_rides,
//   u_rides: state.bookingReducer.u_rides,
//   loadrides: state.bookingReducer.loadrides,
// });

// export default connect(
//   mapStateToProps,
//   {
//     searchUsers,
//     searchUserbyid,
//     searchPassengers,
//     searchPassengerbyid,
//     searchCompanies,
//     searchCurrentRides,
//     searchUpcomingRides,
//     searchCompanybyid
//   })
// (Dashboard);