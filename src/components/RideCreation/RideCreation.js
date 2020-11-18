import React, { useEffect, useState } from "react";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import { connect } from "react-redux";
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Address from "components/Autocomplete/Address";
import Outlined from "components/Autocomplete/Outlined";


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 500,
  },
}));


function RideCreation(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [data,setData]= useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //   props.VehiculeType(1);
  //   }, 1000);
  //   return () => clearTimeout(timer);
  // }, [data]);


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
      });
  return (
    <div>
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="ASAP" {...a11yProps(0)} />
          <Tab label="In Advance" {...a11yProps(1)} />
          <Tab label="Provision" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Address />
            <form className={classes.root} noValidate autoComplete="off">
              <TextField id="outlined-basic" label="Outlined" variant="outlined" dir={theme.direction} />
            </form>
          <Address />
            <form className={classes.root} noValidate autoComplete="off">
              <TextField id="outlined-basic" label="Outlined" variant="outlined" dir={theme.direction} />
            </form>
            <div>
              <Switch
                defaultChecked
                color="default"
                inputProps={{ 'aria-label': 'checkbox with default color' }}
              />
            </div>
        </TabPanel>

        <TabPanel value={value} index={1} dir={theme.direction}>
          <div>
            <Address/>
            <Outlined />
            <Address />
            <Outlined />
            <GridContainer>
              <GridItem xs={12} sm={6} md={3}>
                <form className={classes.container} noValidate>
                  <TextField
                  id="datetime-local"
                  label="Next appointment"
                  type="datetime-local"
                  defaultValue="2017-05-24T10:30"
                  className={classes.textField}
                  InputLabelProps={{
                  shrink: true,
                  }}
                  />
                </form>
                <div>
                  <Switch
                  defaultChecked
                  color="default"
                  inputProps={{ 'aria-label': 'checkbox with default color' }}
                  />
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </TabPanel>

        <TabPanel value={value} index={2} dir={theme.direction}>
          <div>
          <Address />
          <Outlined />
          <Address />
          <Outlined />
          <div>
          <GridContainer>
              <GridItem xs={12} sm={6} md={3}>
                <form className={classes.container} noValidate>
                  <TextField
                  id="datetime-local"
                  label="Next appointment"
                  type="datetime-local"
                  defaultValue="2017-05-24T10:30"
                  className={classes.textField}
                  InputLabelProps={{
                  shrink: true,
                  }}
                  />
                </form>
              </GridItem>
            </GridContainer>
          </div>
          <div>
            <GridContainer>
              <GridItem xs={12} sm={6} md={3}>
                <form className={classes.container} noValidate>
                  <TextField
                  id="datetime-local"
                  label="Next appointment"
                  type="datetime-local"
                  defaultValue="2017-05-24T10:30"
                  className={classes.textField}
                  InputLabelProps={{
                  shrink: true,
                  }}
                  />
                </form>
              </GridItem>
            </GridContainer>
          </div>
          <div>
            <Switch
              defaultChecked
              color="default"
              inputProps={{ 'aria-label': 'checkbox with default color' }}
            />
          </div>
          </div>
        </TabPanel>
      </SwipeableViews>
    </div>

    </div>
  );
}
const mapStateToProps = (state) => ({
  
});

export default connect(
  mapStateToProps,
  {
  })
(RideCreation);



