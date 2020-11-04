import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./nav/Header";
import Sidebar from "./nav/Sidebar";
import isLoggedIn from "../utils";
import { employeeReports } from "../actions";

class Reports extends Component {
  componentDidMount() {
    if (!isLoggedIn()) {
      this.props.history.push({
        pathname: "/",
      });
    }
    this.props.employeeReports();
  }
  render() {
    const { reports } = this.props;
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
              {!reports ? (
                "There are no report at this time."
              ) : (
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
                        {reports.map((report) => (
                          <tr>
                            <td>
                              {report.get("first_name")}{" "}
                              {report.get("last_name")}
                            </td>
                            <td>{report.get("job_title")}</td>
                            <td>
                              {!report.get("leave_status")
                                ? "Not On Leave"
                                : report.get("leave_status")}
                            </td>
                            <td>
                              {!report.get("paye_status")
                                ? "Pending"
                                : report.get("paye_status")}
                            </td>
                            <td>
                              {!report.get("pension_status")
                                ? "Pending"
                                : report.get("pension_status")}
                            </td>
                            <td>
                              {!report.get("nsitf_status")
                                ? "Pending"
                                : report.get("nsitf_status")}
                            </td>
                            <td>
                              {!report.get("nhf_status")
                                ? "Pending"
                                : report.get("nhf_status")}
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
    loading: state.employee_reports.get("loading"),
    error: state.employee_reports.get("error"),
    reports: state.employee_reports.get("reports"),
  };
};

export default connect(mapStateToProps, { employeeReports })(Reports);
