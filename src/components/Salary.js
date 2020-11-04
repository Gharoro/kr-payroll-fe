import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./nav/Header";
import EmployeeSidebar from "./nav/EmployeeSidebar";
import isLoggedIn from "../utils";
import { getSalary } from "../actions";

class Salary extends Component {
  numberWithCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  componentDidMount() {
    if (!isLoggedIn()) {
      this.props.history.push({
        pathname: "/",
      });
    }
    this.props.getSalary();
  }
  render() {
    const { salary } = this.props;
    sessionStorage.setItem("basic", salary.get("basic_salary"));
    sessionStorage.setItem("deductions", salary.get("deductions"));
    sessionStorage.setItem("net", salary.get("net_salary"));
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
              {!salary ? (
                "Loading..."
              ) : (
                <div className="col-md-6 add-employee-form p-4 bg-white rounded">
                  <div>
                    <p>
                      <strong>Basic Salary:</strong> &#8358;
                      {this.numberWithCommas(sessionStorage.getItem("basic"))}
                    </p>
                    <hr />
                    <p>
                      <strong>Deductions:</strong> &#8358;
                      {this.numberWithCommas(
                        sessionStorage.getItem("deductions")
                      )}
                    </p>
                    <hr />
                    <p>
                      <strong>Net Salary:</strong> &#8358;
                      {this.numberWithCommas(sessionStorage.getItem("net"))}
                    </p>
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
    loading: state.employee_salary.get("loading"),
    error: state.employee_salary.get("error"),
    salary: state.employee_salary.get("salary"),
  };
};

export default connect(mapStateToProps, { getSalary })(Salary);
