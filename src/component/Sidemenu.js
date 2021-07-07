import React, { } from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import { Card, CardBody, Col, Row, Nav, NavItem } from "reactstrap";
import Quest1 from "../pages/Quest1";
import Quest2 from "../pages/Quest2";
import icon from "../logo/logo.svg";
import icon2 from "../icon/Q1.svg";
import icon3 from "../icon/Q2.svg";

function Sidemenu() {

  return (
    <div>

      <div className="container">

      <Row>

        <Col md={2} className="tes">
          <Card className="kardmenu">

            <CardBody>

              <div >

              <img src={icon} alt="logo" />

                <Nav className="side">
          
                  <NavItem className="side-men">
                    <img src={icon2} alt="logo" />
                    <NavLink
                      to="/quest1"
                      activeClassName="active"
                      className="nav-link hov"
                      >
                      Question 1
                    </NavLink>
                  </NavItem>

                  <NavItem className="side-men">
                    <img src={icon3} alt="logo" />
                    <NavLink
                      to="/quest2"
                      activeClassName="active"
                      className="nav-link hov"
                      >
                      Question 2
                    </NavLink>
                  </NavItem>

                </Nav>

              </div>

            </CardBody>
            </Card>

        
            </Col>

            <Switch>
                <Route path="/quest1">
                    <Quest1 />
                </Route>
                <Route path="/quest2">
                    <Quest2 />
                </Route>
            </Switch>

      </Row>

      </div>

    </div>
  );
}

export default Sidemenu;