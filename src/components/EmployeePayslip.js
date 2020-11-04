import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./nav/Header";
import EmployeeSidebar from "./nav/EmployeeSidebar";
import isLoggedIn from "../utils";
import { getPayslip } from "../actions";

class EmployeePayslip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "none",
      month: "",
    };
    this.showPayslip = this.showPayslip.bind(this);
  }

  componentDidMount() {
    if (!isLoggedIn()) {
      this.props.history.push({
        pathname: "/",
      });
    }
  }
  showPayslip() {
    this.props.getPayslip(this.state.month).then((res) => {
      if (res.success) {
        this.setState({ display: "block" });
      } else {
        alert("An error occured!");
      }
    });
  }
  render() {
    const { payslip } = this.props;
    return (
      <div>
        <Header />

        <div class="container-fluid">
          <div class="row">
            <EmployeeSidebar page="payslip" />
            <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
              <div class="d-flex flex-column justify-content-start  flex-wrap flex-md-nowrap pt-3 pb-2 mb-3 border-bottom">
                <h1 class="h2">Payslips</h1>
                <p>Kindly select the month to view payslip.</p>
              </div>
              <div className="col-md-8 add-employee-form p-3 bg-white rounded">
                <form action="">
                  <div class="form-group">
                    <label for="month" className="font-weight-bold mb-3">
                      Month
                    </label>
                    <select
                      class="form-control"
                      id="month"
                      onChange={(e) => {
                        this.setState({ month: e.target.value });
                      }}
                    >
                      <option selected>
                        Please select month to view payslip
                      </option>
                      <option value="August 2020">August 2020</option>
                      <option value="September 2020">September 2020</option>
                      <option value="October 2020">October 2020</option>
                      <option value="November 2020">November 2020</option>
                    </select>
                  </div>

                  <button
                    type="button"
                    class="btn btn-primary mb-2"
                    onClick={this.showPayslip}
                  >
                    VIEW PAYSLIP
                  </button>
                </form>
              </div>
              {/* Payslip */}
              {!payslip ? (
                "No payslip found!"
              ) : (
                <React.Fragment>
                  <div style={{ display: this.state.display }}>
                    <h2 className="mt-4">
                      Payslip{" "}
                      <button className="btn btn-secondary">
                        Download Payslip
                      </button>
                    </h2>
                    <p>{this.state.month}</p>
                  </div>
                  <div
                    className="col-md-8 add-employee-form p-3 mb-3 bg-white"
                    style={{ display: this.state.display }}
                  >
                    <h6 className="font-weight-bolder">Kimberly Ryan</h6>
                    <p>
                      386, Quiet valley lane, <br /> Victoria Island, Lagos
                    </p>
                    <div className="mt-5">
                      <h6 className="font-weight-bolder">Lanre Phillips</h6>
                      <p>Account Manager</p>
                    </div>

                    <div className="row pl-3">
                      <div className="col-md-6 earnings mr-2">
                        <h6 className="font-weight-bolder mt-2">Earnings</h6>
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center border-bottom">
                          <p>Basic Salary</p>
                          <p>
                            &#8358;
                            {payslip.get("basic_salary")}
                          </p>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center border-bottom">
                          <p>House Allowance</p>
                          <p>
                            &#8358;
                            {payslip.get("housing")}
                          </p>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center border-bottom">
                          <p>Transportation</p>
                          <p>
                            &#8358;
                            {payslip.get("transportation")}
                          </p>
                        </div>
                        <hr />

                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center border-bottom font-weight-bolder">
                          <p>Total</p>
                          <p>
                            &#8358;
                            {payslip.get("total_earnings")}
                          </p>
                        </div>
                      </div>
                      <div className="col-md-5 deductions">
                        <h6 className="font-weight-bolder mt-2">Deductions</h6>
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center ">
                          <p>PAYE</p>
                          <p>
                            &#8358;
                            {payslip.get("paye_amount")}
                          </p>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center ">
                          <p>Pension</p>
                          <p>
                            &#8358;
                            {payslip.get("pension_amount")}
                          </p>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center ">
                          <p>NSITF</p>
                          <p>
                            &#8358;
                            {payslip.get("nsitf_amount")}
                          </p>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center ">
                          <p>NHF</p>
                          <p>
                            &#8358;
                            {payslip.get("nhf_amount")}
                          </p>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center  font-weight-bolder">
                          <p>Total Deductions</p>
                          <p>
                            &#8358;
                            {payslip.get("total_deductions")}
                          </p>
                        </div>
                      </div>
                      <h4 className="mt-2 mr-5">
                        {" "}
                        Net Salary: &#8358;
                        {payslip.get("net_salary")}
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
    loading: state.employee_payslip.get("loading"),
    error: state.employee_payslip.get("error"),
    payslip: state.employee_payslip.get("payslip"),
  };
};

export default connect(mapStateToProps, { getPayslip })(EmployeePayslip);
