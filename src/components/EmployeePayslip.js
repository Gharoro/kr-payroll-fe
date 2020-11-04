import React, { Component } from "react";
import Header from "./nav/Header";
import EmployeeSidebar from "./nav/EmployeeSidebar";

export default class EmployeePayslip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "none",
    };
    this.showPayslip = this.showPayslip.bind(this);
  }
  showPayslip() {
    this.setState({ display: "block" });
  }
  render() {
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
                    <select class="form-control" id="month">
                      <option selected>
                        Please select month to view payslip
                      </option>
                      <option value="1">January 2020</option>
                      <option value="2">February 2020</option>
                      <option value="3">March 2020</option>
                      <option value="4">April 2020</option>
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
              <div style={{ display: this.state.display }}>
                <h2 className="mt-4">
                  Payslip{" "}
                  <button className="btn btn-secondary">
                    Download Payslip
                  </button>
                </h2>
                <p>March 2020</p>
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
                      <p>N450,000</p>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center border-bottom">
                      <p>House Allowance</p>
                      <p>N50,000</p>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center border-bottom">
                      <p>Transportation</p>
                      <p>N20,000</p>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center border-bottom">
                      <p>Others</p>
                      <p>N10,000</p>
                    </div>
                    <hr />

                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center border-bottom font-weight-bolder">
                      <p>Total</p>
                      <p>N530,000</p>
                    </div>
                  </div>
                  <div className="col-md-5 deductions">
                    <h6 className="font-weight-bolder mt-2">Deductions</h6>
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center ">
                      <p>Tax + V.A.T</p>
                      <p>N160,000</p>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center ">
                      <p>Pension</p>
                      <p>N50,000</p>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center ">
                      <p>NSITF</p>
                      <p>N20,000</p>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center ">
                      <p>NHIF</p>
                      <p>N10,000</p>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center  font-weight-bolder">
                      <p>Total Deductions</p>
                      <p>N230,000</p>
                    </div>
                  </div>
                  <h4 className="mt-2 mr-5">Net Salary: N330,000</h4>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}
