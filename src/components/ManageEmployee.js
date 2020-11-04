import React, { Component } from "react";
import Header from "./nav/Header";
import Sidebar from "./nav/Sidebar";

export default class ManageEmployee extends Component {
  render() {
    return (
      <div>
        <Header />

        <div class="container-fluid">
          <div class="row">
            <Sidebar page="manage-employees" />
            <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
              <div class="d-flex flex-column justify-content-start  flex-wrap flex-md-nowrap pt-3 pb-2 mb-3 border-bottom">
                <h1 class="h2">Manage Employees</h1>
              </div>
              <div className="employees-table">
                <div class="table-responsive">
                  <table class="table table-borderless table-sm">
                    <thead className="text-center">
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Department</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody className="text-center font-weight-normal">
                      <tr>
                        <td>1</td>
                        <td>Lanre Phillips</td>
                        <td>Account Manager</td>
                        <td>Finance</td>
                        <td>lanrephillips@gmail.com</td>
                        <td>08144618246</td>
                        <td>
                          <a href="/employee/1/edit">Edit</a>
                        </td>
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
