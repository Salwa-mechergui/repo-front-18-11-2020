// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import { bugs, website, server } from "variables/general.js";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.js";
import React, { useEffect, useState } from "react";
// import "./Booking.css";
import {
  searchUsers,
  searchUserbyid,
  searchPassengers,
  searchPassengerbyid,
  searchCompanies,
  searchRides
} from "../../reducers/actions/bookingActions/bookAction";
import { connect } from "react-redux";
import { NativeSelect, FormControl } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete'


import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

 function Dashboard(props){
  const classes = useStyles();
  const [data, setData] = useState(false);
  const [i, setI] = useState(0);
  const [spinner, setSpinner] = useState(true);
  const [spinnercompany, setSpinnercompany] = useState(true);

  const [ridespinner, setRideSpinner] = useState(true);
  const [passengerspiner, setpassengerspiner] = useState(true);
  const [selected, setSelected] = useState(false);
  const [selectedpassenger, setSelectedpassenger] = useState(false);
  const [frontuser, setfrontuser] = useState([])
  const [passenger, setPassenger] = useState([])
  const [rides, setrides] = useState([])
  const [userData, setUserData] = useState(false)
  const [passengerData, setPassengerData] = useState(false)
  const [userSpinner, setuserSpinner] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setSpinner(props.load);
    }, 1000);
    return () => clearTimeout(timer);
  }, [spinner]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSpinner(props.loadcompany);
    }, 1000);
    return () => clearTimeout(timer);
  }, [spinnercompany]);


  useEffect(() => {
    props.searchUsers(1);
    setData(true);
  }, [data]);


 
  const handleChange = async (id) => {
    console.log(id)
    await props.searchUserbyid(1, id);
    await props.searchPassengers(id);
    await props.searchCompanies(1, id);
    await props.searchRides(1, id, "way_to");
    setSelected(true);
    setUserData(true);
    setfrontuser(props.frontUser);
    setrides(props.rides);
    setSpinner(props.loadfrontuser);
    setRideSpinner(props.loadrides);
  };

  const handleChangePassenger = async (id) => {
    console.log(props.frontUser)
    console.log("hello")
    await props.searchPassengerbyid(props.frontUser[0].id_front_user,id);
    setSelectedpassenger(true);
    setPassengerData(true);
    setPassenger(props.passenger);
    setpassengerspiner(props.loadpassenger);
  };

  const handleChangeCompany = async (id) => {};


  return (
    <div>
    <GridContainer>
      <GridItem xs={12} sm={6} md={3}>
    <div className="ridecreation">
      <div className="formControl">
        {spinner && !data ? (
          <img className="spiner" src="https://svgshare.com/i/EmH.svg" alt="" />
        ) : (
          // <FormControl>
          //   <NativeSelect
          //     defaultValue=""
          //     onChange={(e) => handleChange(e.target.value)}
          //   >
          //     <option value="1">select a customer</option>
          //     {props.frontUsers &&
          //       props.frontUsers.map(({id_customer ,first_name,front_end_user_id }, i) => (
          //         <option key={i} value={id_customer}>
          //           {first_name}
          //         </option>
          //       ))}
          //   </NativeSelect>
          // </FormControl>
          <Autocomplete
 
  options={ props.frontUsers}
   id={options.id_customer}
  getOptionLabel={(options) => options.first_name||""}
  style={{ width: 300 }}
  onChange={(options)=>handleChange(options.target.id)}
  renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
/>
        )}
        {selected ? (
          <div>
          <FormControl>
            <NativeSelect
              defaultValue=""
              onChange={(e) => handleChangePassenger(e.target.value)}
            >
              <option value="1">select a passenger</option>
              {props.passengers &&
                props.passengers.map(({ first_name, id, passenger_id }, i) => (
                  <option key={i} value={passenger_id}>
                    {first_name}
                  </option>
                ))}
            </NativeSelect>
          </FormControl>
          <FormControl>
          <NativeSelect
            defaultValue=""
            onChange={(e) => handleChangeCompany(e.target.value)}
          >
            <option value="1">select a company</option>
            {props.companies &&
              props.companies.map(({ id, name}, i) => (
                <option key={i} value={id}>
                  {name}
                </option>
              ))}
          </NativeSelect>
        </FormControl>
        </div>  
        ) : null}

      </div>
      <div>
        {userSpinner& !userData ?   <img className="spiner" src="https://svgshare.com/i/EmH.svg" alt="" />: (
          <div className="dataoutput">
            <h5>Business customer</h5>
            <h5>first name :{props.frontUser[0].first_name}</h5>
            <h5>last name :{props.frontUser[0].last_name}</h5>
            <h5>email :{props.frontUser[0].email}</h5>
            <h5>phone:{props.frontUser[0].phone_number}</h5>
            {props.rides && props.rides.map((el)=>
            <div>
             <h5>upcoming rides :</h5>
             <h5>current rides :{el.request_id}</h5>
             </div>
            )}
           
          </div>
        )}
      </div>
    </div>
    
    </GridItem>
    </GridContainer>
  </div>
  );
}
const mapStateToProps = (state) => ({
  frontUsers: state.bookingReducer.frontUsers,
  frontUser: state.bookingReducer.frontUser,
  load: state.bookingReducer.loading,
  loadpassenger: state.bookingReducer.loadfrontuser,
  passengers: state.bookingReducer.passengers,
  passenger: state.bookingReducer.passenger,
  companies: state.bookingReducer.companies,
  loadcompany: state.bookingReducer.loadcompany,
  rides: state.bookingReducer.rides,
  loadrides: state.bookingReducer.loadrides
});

export default connect(mapStateToProps, {
  searchUsers,
  searchUserbyid,
  searchPassengers,
  searchPassengerbyid,
  searchCompanies,
  searchRides
})(Dashboard);