import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./nav/Header";
import EmployeeSidebar from "./nav/EmployeeSidebar";
import isLoggedIn from "../utils";
import { getEmployee } from "../actions";

class EmployeeDashboard extends Component {
  componentDidMount() {
    if (!isLoggedIn()) {
      this.props.history.push({
        pathname: "/",
      });
    }
    this.props.getEmployee();
  }
  render() {
    const { employee } = this.props;
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
              {!employee ? (
                "Loading..."
              ) : (
                <React.Fragment>
                  <div class="d-flex flex-column justify-content-start  flex-wrap flex-md-nowrap pt-3 pb-2 mb-3 border-bottom">
                    <h1 class="h2">Profile</h1>
                    <p>Welcome to your profile, {employee.get("last_name")}</p>
                  </div>

                  <div className="col-md-7 add-employee-form p-4 bg-white rounded">
                    <div>
                      <h6 className="font-weight-bolder">
                        Full name: {employee.get("first_name")}{" "}
                        {employee.get("last_name")}
                      </h6>
                      <p>
                        <strong>Job Title:</strong> {employee.get("job_title")}
                      </p>
                      <p>
                        <strong>Department:</strong>{" "}
                        {employee.get("department")}
                      </p>
                      <p>
                        <strong>Email:</strong> {employee.get("email")}
                      </p>
                      <p>
                        <strong>Phone:</strong> {employee.get("phone")}
                      </p>
                      <p>
                        <strong>Address:</strong> {employee.get("address")}
                      </p>
                      <p>
                        <strong>Gender:</strong> {employee.get("gender")}
                      </p>
                      <p>
                        <strong>Age:</strong> {employee.get("age")}
                      </p>
                    </div>
                  </div>
                </React.Fragment>
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
    loading: state.employee_profile.get("loading"),
    error: state.employee_profile.get("error"),
    employee: state.employee_profile.get("employee"),
  };
};

export default connect(mapStateToProps, { getEmployee })(EmployeeDashboard);
