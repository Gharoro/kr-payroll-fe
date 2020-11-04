import React, { Component } from "react";
import Header from "./nav/Header";
import EmployeeSidebar from "./nav/EmployeeSidebar";

export default class EmployeeDashboard extends Component {
  render() {
    return (
      <div>
        <Header />

        <div class="container-fluid">
          <div class="row">
            <EmployeeSidebar page="profile" />
            <main
              role="main"
              class="col-md-9 dashboard ml-sm-auto col-lg-10 px-md-4"
            >
              <div class="d-flex flex-column justify-content-start  flex-wrap flex-md-nowrap pt-3 pb-2 mb-3 border-bottom">
                <h1 class="h2">Profile</h1>
                <p>Welcome to your profile.</p>
              </div>
              <div className="col-md-7 add-employee-form p-4 bg-white rounded">
                <div>
                  <h6 className="font-weight-bolder">
                    Full name: Lanre Phillips
                  </h6>
                  <p>
                    <strong>Job Title:</strong> Account Manager
                  </p>
                  <p>
                    <strong>Department:</strong> Finance
                  </p>
                  <p>
                    <strong>Email:</strong> lanrephillips@gmail.com
                  </p>
                  <p>
                    <strong>Phone:</strong> 08144618246
                  </p>
                  <p>
                    <strong>Address:</strong> 40, Olorufunmi street olusoson,
                    off kudirat abiola way, Oregun, Lagos state
                  </p>
                  <p>
                    <strong>Gender:</strong> Male
                  </p>
                  <p>
                    <strong>Age:</strong> 33 years
                  </p>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}
