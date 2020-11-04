import React, { Component } from "react";
import Header from "./nav/Header";
import EmployeeSidebar from "./nav/EmployeeSidebar";

export default class Salary extends Component {
  render() {
    return (
      <div>
        <Header />

        <div class="container-fluid">
          <div class="row">
            <EmployeeSidebar page="salary" />
            <main
              role="main"
              class="col-md-9 dashboard ml-sm-auto col-lg-10 px-md-4"
            >
              <div class="d-flex flex-column justify-content-start  flex-wrap flex-md-nowrap pt-3 pb-2 mb-3 border-bottom">
                <h1 class="h2">Salary Details</h1>
                <p>Please find the details of your salary below.</p>
              </div>
              <div className="col-md-6 add-employee-form p-4 bg-white rounded">
                <div>
                  <h6 className="font-weight-bolder">
                    Full name: Lanre Phillips
                  </h6>
                  <p>
                    <strong>Job Title:</strong> Account Manager
                  </p>
                  <hr />
                  <p>
                    <strong>Basic Salary:</strong> N450,000
                  </p>
                  <p>
                    <strong>Deductions:</strong> N150,000
                  </p>
                  <p>
                    <strong>Net Salary:</strong> N300,000
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
