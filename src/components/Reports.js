import React, { Component } from "react";
import Header from "./nav/Header";
import Sidebar from "./nav/Sidebar";

export default class Reports extends Component {
  render() {
    return (
      <div>
        <Header />

        <div class="container-fluid">
          <div class="row">
            <Sidebar page="reports" />
            <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
              <div class="d-flex flex-column justify-content-start  flex-wrap flex-md-nowrap pt-3 pb-2 mb-3 border-bottom">
                <h1 class="h2">Report</h1>
              </div>
              <div className="employees-table">
                <div class="table-responsive">
                  <table class="table table-borderless table-sm">
                    <thead className="">
                      <tr>
                        <th>Employee</th>
                        <th>Position</th>
                        <th>Leave Status</th>
                        <th>PAYE</th>
                        <th>Pension</th>
                        <th>NSITF</th>
                        <th>NHF</th>
                      </tr>
                    </thead>
                    <tbody className=" font-weight-normal">
                      <tr>
                        <td>Lanre Phillips</td>
                        <td>Account Manager</td>
                        <td>On Leave</td>
                        <td>Paid</td>
                        <td>Pending</td>
                        <td>Pending</td>
                        <td>Paid</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}
