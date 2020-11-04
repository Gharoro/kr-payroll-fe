import React, { Component } from "react";
import Header from "./nav/Header";
import Sidebar from "./nav/Sidebar";

export default class ManagePayroll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "none",
    };
    this.callManagePayroll = this.callManagePayroll.bind(this);
  }
  callManagePayroll() {
    this.setState({ display: "block" });
  }
  render() {
    return (
      <div>
        <Header />

        <div class="container-fluid">
          <div class="row">
            <Sidebar page="payroll" />
            <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
              <div class="d-flex flex-column justify-content-start  flex-wrap flex-md-nowrap pt-3 pb-2 mb-3 border-bottom">
                <h1 class="h2">Manage Payrolls</h1>
              </div>
              <div className="col-md-8 add-employee-form p-3 bg-white rounded">
                <form action="">
                  <div class="form-group">
                    <label for="gender" className="font-weight-bold mb-3">
                      Employees List
                    </label>
                    <select class="form-control" id="gender">
                      <option>
                        Please select an employee to manage payroll
                      </option>
                      <option selected value="1">
                        Lanre Phillips
                      </option>
                      <option value="2">Anita Johnson</option>
                      <option value="3">Efosa Bright</option>
                      <option value="4">Samuel Okiki</option>
                    </select>
                  </div>

                  <button
                    type="button"
                    class="btn btn-primary mb-2"
                    onClick={this.callManagePayroll}
                  >
                    MANAGE PAYROLL
                  </button>
                </form>
              </div>
              {/* Payslip */}
              <div
                className="mt-4 mb-4"
                style={{ display: this.state.display }}
              >
                <h2>Payroll for Lanre Phillips</h2>
                <p>
                  Please enter values without any special characters. Only
                  numbers allowed.
                </p>
              </div>
              <div
                className="col-md-6 add-employee-form p-4 mb-3 bg-white"
                style={{ display: this.state.display }}
              >
                <form action="">
                  <div class="form-group">
                    <label for="salary">Basic Salary <span>*</span> </label>
                    <input
                      type="number"
                      class="form-control"
                      id="salary"
                      value="550000"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label for="housing">House Allowance</label>
                    <input
                      type="number"
                      class="form-control"
                      id="housing"
                      value="0"
                    />
                  </div>
                  <div class="form-group">
                    <label for="transportation">Transportation Allowance</label>
                    <input
                      type="number"
                      class="form-control"
                      id="transportation"
                      value="0"
                    />
                  </div>
                  <div className="form-row">
                    <div className="col-md-6">
                      <div class="form-group">
                        <label for="paye">PAYE (%) <span>*</span></label>
                        <input
                          type="number"
                          class="form-control"
                          id="paye"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div class="form-group">
                        <label for="pension">Pension (%) <span>*</span></label>
                        <input
                          type="number"
                          class="form-control"
                          id="pension"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col-md-6">
                      <div class="form-group">
                        <label for="nsitf">NSITF (%) <span>*</span></label>
                        <input
                          type="number"
                          class="form-control"
                          id="nsitf"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div class="form-group">
                        <label for="nhf">NHF (%) <span>*</span></label>
                        <input
                          type="number"
                          class="form-control"
                          id="nhf"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <button type="submit" class="btn btn-primary mb-2">
                    Submit
                  </button>
                </form>
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}
