import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./nav/Header";
import Sidebar from "./nav/Sidebar";
import isLoggedIn from "../utils";
import { allEmployees } from "../actions";

class ManageEmployee extends Component {
  componentDidMount() {
    if (!isLoggedIn()) {
      this.props.history.push({
        pathname: "/",
      });
    }
    this.props.allEmployees();
  }
  render() {
    const employees = this.props.employees.get("data");
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
              {!employees ? (
                "<h3>You do not have any employee at the moment. </h3>"
              ) : (
                <div className="employees-table">
                  <div class="table-responsive">
                    <table class="table table-borderless table-sm">
                      <thead className="text-center">
                        <tr>
                          <th>Name</th>
                          <th>Position</th>
                          <th>Department</th>
                          <th>Email</th>
                          <th>Phone</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody className="text-center font-weight-normal">
                        {employees.map((employee) => (
                          <tr>
                            <td>
                              {employee.get("first_name")}{" "}
                              {employee.get("last_name")}
                            </td>
                            <td>{employee.get("job_title")}</td>
                            <td>{employee.get("department")}</td>
                            <td>{employee.get("email")}</td>
                            <td>{employee.get("phone")}</td>
                            <td>
                              <a href={`/employee/${employee.get("id")}/edit`}>
                                Edit
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    loading: state.all_employees.get("loading"),
    error: state.all_employees.get("error"),
    employees: state.all_employees.get("employees"),
  };
};

export default connect(mapStateToProps, { allEmployees })(ManageEmployee);
