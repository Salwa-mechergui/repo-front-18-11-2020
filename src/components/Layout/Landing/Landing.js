import React from 'react'
import { Navbar, NavbarBrand } from "reactstrap";
import "./Landing.css";

export default function Landing() {

    return (
        <div>
        <Navbar ClassName="navb" light expand="md">
          <NavbarBrand>
            <img
              src="https://classnco-public-resources.s3.amazonaws.com/integration/Marcel/company_preferences/logos/000/000/016/original/logo.png?1470405480"
              alt="..."
              className="logo-image"
            />
          </NavbarBrand>
        </Navbar>
        </div>
    )
}

