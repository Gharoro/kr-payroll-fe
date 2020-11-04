import React, { Component } from "react";
import Header from "./nav/Header";
import Sidebar from "./nav/Sidebar";
import isLoggedIn from "../utils";

export default class AdminDashboard extends Component {
  constructor(props) {
    super(props);
    this.company_name = sessionStorage.getItem("c_name");
    this.company_address = sessionStorage.getItem("c_address");
    this.company_contact = sessionStorage.getItem("c_contact");
  }
  componentDidMount() {
    if (!isLoggedIn()) {
      this.props.history.push({
        pathname: "/",
      });
    }
  }
  render() {
    return (
      <div>
        <Header />

        <div class="container-fluid">
          <div class="row">
            <Sidebar page="dashboard" />
            <main
              role="main"
              class="col-md-9 dashboard ml-sm-auto col-lg-10 px-md-4"
            >
              <div class="d-flex flex-column justify-content-start  flex-wrap flex-md-nowrap pt-3 pb-2 mb-3 border-bottom">
                <h1 class="h2">Dashboard</h1>
                <p>
                  Welcome to your dashboard, <stron>{this.company_name}</stron>
                </p>
              </div>
              <div className="col-md-4 add-employee-form p-4 bg-white rounded">
                <div>
                  <h6 className="font-weight-bolder">{this.company_name}</h6>
                  <p>{this.company_address}</p>
                  <p>{this.company_contact}</p>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}
