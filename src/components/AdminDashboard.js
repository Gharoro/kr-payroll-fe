import React, { Component } from "react";
import Header from "./nav/Header";
import Sidebar from "./nav/Sidebar";

export default class AdminDashboard extends Component {
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
                <p>Welcome to your dashboard.</p>
              </div>
              <div className="col-md-4 add-employee-form p-4 bg-white rounded">
                <div>
                  <h6 className="font-weight-bolder">Kimberly Ryan</h6>
                  <p>
                    386, Quiet valley lane, <br /> Victoria Island, Lagos
                  </p>
                  <p>(234) 8144618246</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3">
                  <div
                    class="card text-white bg-dark mt-3 mb-3"
                    style={{ maxWidth: "18rem;" }}
                  >
                    <div class="card-header">Number of Employees</div>
                    <div class="card-body">
                      <h5 class="card-title">50</h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div
                    class="card text-white bg-dark mt-3 mb-3"
                    style={{ maxWidth: "18rem;" }}
                  >
                    <div class="card-header">Employees Compensation</div>
                    <div class="card-body">
                      <h5 class="card-title">2,000,000</h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-3"></div>
                <div className="col-md-3"></div>
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}
