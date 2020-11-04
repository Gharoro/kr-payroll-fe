import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./nav/Header";
import Sidebar from "./nav/Sidebar";
import isLoggedIn from "../utils";
import { allEmployees, generatePayslip } from "../actions";

class Payslips extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "none",
      month: "",
      employee_id: 0,
    };
    this.callGeneratePayslip = this.callGeneratePayslip.bind(this);
  }
  numberWithCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  componentDidMount() {
    if (!isLoggedIn()) {
      this.props.history.push({
        pathname: "/",
      });
    }
    this.props.allEmployees();
  }
  callGeneratePayslip() {
    this.props
      .generatePayslip(this.state.month, this.state.employee_id)
      .then((res) => {
        if (res.success) {
          this.setState({ display: "block" });
        } else {
          alert("An error occured!");
        }
      });
  }
  render() {
    const employees = this.props.employees.get("data");
    const payslip = this.props.response.get("payslip");
    return (
      <div>
        <Header />

        <div class="container-fluid">
          <div class="row">
            <Sidebar page="payslip" />
            <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
              <div class="d-flex flex-column justify-content-start  flex-wrap flex-md-nowrap pt-3 pb-2 mb-3 border-bottom">
                <h1 class="h2">Payslips</h1>
              </div>
              <div className="col-md-8 add-employee-form p-3 bg-white rounded">
                {this.props.error.get("error") ? (
                  <div
                    class="alert alert-danger alert-dismissible fade show"
                    role="alert"
                  >
                    <strong>{this.props.error.get("error")}</strong>
                    <button
                      type="button"
                      class="close"
                      data-dismiss="alert"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                ) : (
                  ""
                )}
                <form action="">
                  <div className="form-row">
                    <div className="col-md-4">
                      <div class="form-group">
                        <label for="gender" className="font-weight-bold mb-3">
                          Month
                        </label>
                        <select
                          class="form-control"
                          id="month"
                          onChange={(e) => {
                            this.setState({ month: e.target.value });
                          }}
                        >
                          <option selected>Select month</option>
                          <option value="August 2020">August 2020</option>
                          <option value="September 2020">September 2020</option>
                          <option value="October 2020">October 2020</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div class="form-group">
                        <label for="gender" className="font-weight-bold mb-3">
                          Employees List
                        </label>
                        <select
                          class="form-control"
                          id="emplyee"
                          onChange={(e) => {
                            this.setState({ employee_id: e.target.value });
                          }}
                        >
                          <option selected>
                            Please select employee to generate payslip for
                          </option>
                          {!employees
                            ? ""
                            : employees.map((employee) => (
                                <option value={employee.get("id")}>
                                  {employee.get("first_name")}{" "}
                                  {employee.get("last_name")}
                                </option>
                              ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    class="btn btn-primary mb-2"
                    onClick={this.callGeneratePayslip}
                  >
                    GENERATE PAYSLIP
                  </button>
                </form>
              </div>
              {/* Payslip */}
              {!payslip ? (
                "Loading..."
              ) : (
                <React.Fragment>
                  <div style={{ display: this.state.display }}>
                    <h2 className="mt-4">
                      Payslip{" "}
                      <button className="btn btn-secondary">
                        Send Payslip
                      </button>
                    </h2>
                    <p>{payslip.get("month")}</p>
                  </div>
                  <div
                    className="col-md-8 add-employee-form p-3 mb-3 bg-white"
                    style={{ display: this.state.display }}
                  >
                    <h6 className="font-weight-bolder">
                      {this.props.response.get("company_name")}
                    </h6>
                    <p>{this.props.response.get("company_address")}</p>
                    <div className="mt-5">
                      <h6 className="font-weight-bolder">
                        {this.props.response.get("employee_first_name")}{" "}
                        {this.props.response.get("employee_last_name")}
                      </h6>
                      <p>{this.props.response.get("employee_job_title")}</p>
                    </div>

                    <div className="row pl-3">
                      <div className="col-md-6 earnings mr-2">
                        <h6 className="font-weight-bolder mt-2">Earnings</h6>
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center border-bottom">
                          <p>Basic Salary</p>
                          <p>
                            &#8358;
                            {this.numberWithCommas(payslip.get("basic_salary"))}
                          </p>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center border-bottom">
                          <p>House Allowance</p>
                          <p>
                            &#8358;
                            {this.numberWithCommas(payslip.get("housing"))}
                          </p>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center border-bottom">
                          <p>Transportation</p>
                          <p>
                            &#8358;
                            {this.numberWithCommas(
                              payslip.get("transportation")
                            )}
                          </p>
                        </div>
                        <hr />

                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center border-bottom font-weight-bolder">
                          <p>Total</p>
                          <p>
                            &#8358;
                            {this.numberWithCommas(
                              payslip.get("total_earnings")
                            )}
                          </p>
                        </div>
                      </div>
                      <div className="col-md-5 deductions">
                        <h6 className="font-weight-bolder mt-2">Deductions</h6>
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center ">
                          <p>PAYE</p>
                          <p>
                            &#8358;
                            {this.numberWithCommas(payslip.get("paye_amount"))}
                          </p>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center ">
                          <p>Pension</p>
                          <p>
                            &#8358;
                            {this.numberWithCommas(
                              payslip.get("pension_amount")
                            )}
                          </p>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center ">
                          <p>NSITF</p>
                          <p>
                            &#8358;
                            {this.numberWithCommas(payslip.get("nsitf_amount"))}
                          </p>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center ">
                          <p>NHF</p>
                          <p>
                            &#8358;
                            {this.numberWithCommas(payslip.get("nhf_amount"))}
                          </p>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center  font-weight-bolder">
                          <p>Total Deductions</p>
                          <p>
                            &#8358;
                            {this.numberWithCommas(
                              payslip.get("total_deductions")
                            )}
                          </p>
                        </div>
                      </div>
                      <h4 className="mt-2 mr-5">
                        Net Salary: &#8358;
                        {this.numberWithCommas(payslip.get("net_salary"))}
                      </h4>
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
    loading: state.all_employees.get("loading"),
    error: state.all_employees.get("error"),
    employees: state.all_employees.get("employees"),
    /** payslip */
    error: state.generate_payslip.get("error"),
    response: state.generate_payslip.get("response"),
  };
};

export default connect(mapStateToProps, { allEmployees, generatePayslip })(
  Payslips
);
