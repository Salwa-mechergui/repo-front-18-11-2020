import React, { useState } from "react";
import { Alert } from "@material-ui/lab";
import { fade, withStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { loginUser } from "../../reducers/actions/authActions/authActions";
import "./Login.css";
import Header from "../../components/Layout/header/Header";

const BootstrapInput = withStyles(theme => ({
  root: {
    "label + &": { marginTop: theme.spacing(3) }
  },

  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.common.white,
    border: "1px solid #ced4da",
    fontSize: 16,
    width: 350,
    marginBottom: "5%",
    padding: "10px 12px",

    "&:focus": {
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main
    }
  }
}))(InputBase);
let title = "Welcome in your space";
let contentHeader = (
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor
    <br /> incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud
    <br /> exercitation ullamco labori nisi ut aliquip ex ea commodo consequat
  </p>
);

function Login(props) {
  const [login, setLogin] = useState({});
  const [error, setError] = useState("");
  const handleChange = e =>
    setLogin({ ...login, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    if (
      !login.email ||
      login.email === "" ||
      !login.password === "" ||
      login.password === "" 
    )
      return setError("Champs vide");
        
    console.log(login);
    try {
      props.loginUser(login, props.history);
    } catch(err) {
      setError("Login failed");
    }
  };

  return (
    <div className="wrapper">
      <Header title={title} contentHeader={contentHeader} />
      <content>
        <div className="container">
          <div>
            <p></p>
            <span>SIGN IN</span>
          </div>

          <form noValidate>
            {props.errors.error && (
              <div>
                <Alert severity="error">{props.errors.error.message}</Alert>
              </div>
            )}
            {error && (
              <div>
                <Alert severity="error">{error}</Alert>
              </div>
            )}
            <FormControl>
              <InputLabel shrink htmlFor="bootstrap-input">
                E-mail
              </InputLabel>
              <BootstrapInput
                id="email"
                name="email"
                onChange={handleChange}
                placeholder="exemple@exemple.com"
              />
            </FormControl>

            <FormControl>
              <InputLabel shrink htmlFor="bootstrap-input">
                Password
              </InputLabel>
              <BootstrapInput
                id="password"
                name="password"
                type="password"
                onChange={handleChange}
                placeholder="password"
              />
            </FormControl>

            <div className="text-right">
              <Button
                type="submit"
                variant="contained"
                className="Button-signin"
                onClick={handleSubmit}
              >
                Sign in
              </Button>
            </div>
          </form>
        </div>
      </content>
    </div>
  );
}
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(mapStateToProps, { loginUser })(withRouter(Login));
