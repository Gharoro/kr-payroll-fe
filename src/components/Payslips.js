import React, { Component } from "react";
import Header from "./nav/Header";
import Sidebar from "./nav/Sidebar";

export default class Payslips extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "none",
    };
    this.callGeneratePayslip = this.callGeneratePayslip.bind(this);
  }
  callGeneratePayslip() {
    this.setState({ display: "block" });
  }
  render() {
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
                <form action="">
                  <div className="form-row">
                    <div className="col-md-4">
                    <div class="form-group">
                    <label for="gender" className="font-weight-bold mb-3">
                      Month
                    </label>
                    <select class="form-control" id="gender">
                      <option selected>
                        Select month
                      </option>
                      <option value="August 2020">
                        August 2020
                      </option>
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
                    <select class="form-control" id="gender">
                      <option selected>
                        Please select employee to generate payslip for
                      </option>
                      <option value="1">
                        Lanre Phillips
                      </option>
                      <option value="2">Anita Johnson</option>
                      <option value="3">Efosa Bright</option>
                      <option value="4">Samuel Okiki</option>
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
              <div style={{ display: this.state.display }}>
                <h2 className="mt-4">
                  Payslip{" "}
                  <button className="btn btn-secondary">Send Payslip</button>
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
