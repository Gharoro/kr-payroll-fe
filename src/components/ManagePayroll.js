import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./nav/Header";
import Sidebar from "./nav/Sidebar";
import isLoggedIn from "../utils";
import { allEmployees, getEmployeePayroll, updatePayroll } from "../actions";

class ManagePayroll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "none",
      employee_id: 0,
      basic_salary: 0,
      housing: 0,
      transportation: 0,
      paye: 0,
      pension: 0,
      nsitf: 0,
      nhf: 0,
    };
    this.callManagePayroll = this.callManagePayroll.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    if (!isLoggedIn()) {
      this.props.history.push({
        pathname: "/",
      });
    }
    this.props.allEmployees();
  }

  callManagePayroll() {
    this.props.getEmployeePayroll(this.state.employee_id).then((res) => {
      if (res.success) {
        this.setState({ display: "block" });
      } else {
        alert("An error occured!");
      }
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    const data = {
      basic_salary: this.state.basic_salary,
      housing: this.state.housing,
      transportation: this.state.transportation,
      paye: this.state.paye,
      pension: this.state.pension,
      nsitf: this.state.nsitf,
      nhf: this.state.nhf,
    };
    this.props.updatePayroll(data, this.state.employee_id);
  }

  render() {
    const employees = this.props.employees.get("data");
    const payroll = this.props.response.get("payroll");
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
              {!employees ? (
                "Loading..."
              ) : (
                <div className="col-md-8 add-employee-form p-3 bg-white rounded">
                  <form action="">
                    <div class="form-group">
                      <label for="gender" className="font-weight-bold mb-3">
                        Employees List
                      </label>
                      <select
                        class="form-control"
                        id="gender"
                        onChange={(e) => {
                          this.setState({ employee_id: e.target.value });
                        }}
                      >
                        <option selected>
                          Please select employee to manage payroll
                        </option>
                        {employees.map((employee) => (
                          <option value={employee.get("id")}>
                            {employee.get("first_name")}{" "}
                            {employee.get("last_name")}
                          </option>
                        ))}
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
              )}

              {/* Payroll with values */}
              <div
                className="mt-4 mb-4"
                style={{ display: this.state.display }}
              >
                <h3>Manage Payroll</h3>
                <p>
                  Please enter values without any special characters. Only
                  numbers allowed.
                </p>
              </div>
              {!payroll ? (
                <div
                  className="col-md-6 add-employee-form p-4 mb-3 bg-white"
                  style={{ display: this.state.display }}
                >
                  {this.props.message ? (
                    <div
                      class="alert alert-success alert-dismissible fade show"
                      role="alert"
                    >
                      <strong>{this.props.message}</strong>
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
                  {this.props.p_error.get("error") ? (
                    <div
                      class="alert alert-danger alert-dismissible fade show"
                      role="alert"
                    >
                      <strong>{this.props.p_error.get("error")}</strong>
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

                  <form onSubmit={this.handleSubmit}>
                    <div class="form-group">
                      <label for="salary">
                        Basic Salary <span>*</span>{" "}
                      </label>
                      <input
                        required
                        type="number"
                        class="form-control"
                        id="salary"
                        onChange={(e) => {
                          this.setState({ basic_salary: e.target.value });
                        }}
                      />
                    </div>
                    <div class="form-group">
                      <label for="housing">House Allowance</label>
                      <input
                        required
                        type="number"
                        class="form-control"
                        id="housing"
                        placeholder="0"
                        onChange={(e) => {
                          this.setState({ housing: e.target.value });
                        }}
                      />
                    </div>
                    <div class="form-group">
                      <label for="transportation">
                        Transportation Allowance
                      </label>
                      <input
                        required
                        type="number"
                        class="form-control"
                        id="transportation"
                        placeholder="0"
                        onChange={(e) => {
                          this.setState({ transportation: e.target.value });
                        }}
                      />
                    </div>
                    <div className="form-row">
                      <div className="col-md-6">
                        <div class="form-group">
                          <label for="paye">
                            PAYE (%) <span>*</span>
                          </label>
                          <input
                            required
                            type="number"
                            class="form-control"
                            id="paye"
                            onChange={(e) => {
                              this.setState({ paye: e.target.value });
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div class="form-group">
                          <label for="pension">
                            Pension (%) <span>*</span>
                          </label>
                          <input
                            required
                            type="number"
                            class="form-control"
                            id="pension"
                            onChange={(e) => {
                              this.setState({ pension: e.target.value });
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="col-md-6">
                        <div class="form-group">
                          <label for="nsitf">
                            NSITF (%) <span>*</span>
                          </label>
                          <input
                            required
                            type="number"
                            class="form-control"
                            id="nsitf"
                            onChange={(e) => {
                              this.setState({ nsitf: e.target.value });
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div class="form-group">
                          <label for="nhf">
                            NHF (%) <span>*</span>
                          </label>
                          <input
                            required
                            type="number"
                            class="form-control"
                            id="nhf"
                            onChange={(e) => {
                              this.setState({ nhf: e.target.value });
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    <button type="submit" class="btn btn-primary mb-2">
                      UPDATE PAYROLL
                    </button>
                  </form>
                </div>
              ) : (
                <div
                  className="col-md-6 add-employee-form p-4 mb-3 bg-white"
                  style={{ display: this.state.display }}
                >
                  {this.props.message ? (
                    <div
                      class="alert alert-success alert-dismissible fade show"
                      role="alert"
                    >
                      <strong>{this.props.message}</strong>
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
                  {this.props.p_error.get("error") ? (
                    <div
                      class="alert alert-danger alert-dismissible fade show"
                      role="alert"
                    >
                      <strong>{this.props.p_error.get("error")}</strong>
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

                  <form onSubmit={this.handleSubmit}>
                    <div class="form-group">
                      <label for="salary">
                        Basic Salary <span>*</span>{" "}
                      </label>
                      <input
                        type="number"
                        class="form-control"
                        id="salary"
                        placeholder={payroll.get("basic_salary")}
                        onChange={(e) => {
                          this.setState({ basic_salary: e.target.value });
                        }}
                      />
                    </div>
                    <div class="form-group">
                      <label for="housing">House Allowance</label>
                      <input
                        type="number"
                        class="form-control"
                        id="housing"
                        placeholder={payroll.get("housing")}
                        onChange={(e) => {
                          this.setState({ housing: e.target.value });
                        }}
                      />
                    </div>
                    <div class="form-group">
                      <label for="transportation">
                        Transportation Allowance
                      </label>
                      <input
                        type="number"
                        class="form-control"
                        id="transportation"
                        placeholder={payroll.get("transportation")}
                        onChange={(e) => {
                          this.setState({ transportation: e.target.value });
                        }}
                      />
                    </div>
                    <div className="form-row">
                      <div className="col-md-6">
                        <div class="form-group">
                          <label for="paye">
                            PAYE (%) <span>*</span>
                          </label>
                          <input
                            type="number"
                            class="form-control"
                            id="paye"
                            placeholder={payroll.get("paye")}
                            onChange={(e) => {
                              this.setState({ paye: e.target.value });
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div class="form-group">
                          <label for="pension">
                            Pension (%) <span>*</span>
                          </label>
                          <input
                            type="number"
                            class="form-control"
                            id="pension"
                            placeholder={payroll.get("pension")}
                            onChange={(e) => {
                              this.setState({ pension: e.target.value });
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="col-md-6">
                        <div class="form-group">
                          <label for="nsitf">
                            NSITF (%) <span>*</span>
                          </label>
                          <input
                            type="number"
                            class="form-control"
                            id="nsitf"
                            placeholder={payroll.get("nsitf")}
                            onChange={(e) => {
                              this.setState({ nsitf: e.target.value });
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div class="form-group">
                          <label for="nhf">
                            NHF (%) <span>*</span>
                          </label>
                          <input
                            type="number"
                            class="form-control"
                            id="nhf"
                            placeholder={payroll.get("nhf")}
                            onChange={(e) => {
                              this.setState({ nhf: e.target.value });
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    <button type="submit" class="btn btn-primary mb-2">
                      UPDATE PAYROLL
                    </button>
                  </form>
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
    /** payroll */
    error: state.get_payroll.get("error"),
    response: state.get_payroll.get("response"),
    /** update payroll */
    p_error: state.update_payroll.get("error"),
    message: state.update_payroll.get("message"),
  };
};

export default connect(mapStateToProps, {
  allEmployees,
  getEmployeePayroll,
  updatePayroll,
})(ManagePayroll);
