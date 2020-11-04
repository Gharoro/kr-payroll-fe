import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./nav/Header";
import Sidebar from "./nav/Sidebar";
import isLoggedIn from "../utils";
import { addEmployee } from "../actions";

class AddEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      address: "",
      gender: "",
      age: "",
      job_title: "",
      department: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    if (!isLoggedIn()) {
      this.props.history.push({
        pathname: "/",
      });
    }
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.addEmployee(this.state);
  }
  render() {
    return (
      <div>
        <Header />

        <div class="container-fluid">
          <div class="row">
            <Sidebar page="add-employee" />
            <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
              <div class="d-flex flex-column justify-content-start  flex-wrap flex-md-nowrap pt-3 pb-2 mb-3 border-bottom">
                <h1 class="h2">Add Employee</h1>
              </div>
              <div className="col-md-8 add-employee-form p-5 bg-white rounded">
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

                <form onSubmit={this.handleSubmit}>
                  <div className="form-row">
                    <div className="col-md-6">
                      <div class="form-group">
                        <label for="name">
                          First name <span>*</span>
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="name"
                          required
                          onChange={(e) => {
                            this.setState({ first_name: e.target.value });
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div class="form-group">
                        <label for="name">
                          Last Name <span>*</span>
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="name"
                          required
                          onChange={(e) => {
                            this.setState({ last_name: e.target.value });
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  <div class="form-group">
                    <label for="email">
                      Email <span>*</span>
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      required
                      onChange={(e) => {
                        this.setState({ email: e.target.value });
                      }}
                    />
                  </div>
                  <div class="form-group">
                    <label for="name">
                      Phone nmuber <span>*</span>
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="phone"
                      required
                      onChange={(e) => {
                        this.setState({ phone: e.target.value });
                      }}
                    />
                  </div>
                  <div class="form-group">
                    <label for="job title">
                      Address <span>*</span>
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="address"
                      required
                      onChange={(e) => {
                        this.setState({ address: e.target.value });
                      }}
                    />
                  </div>
                  <div className="form-row">
                    <div className="col-md-6">
                      <div class="form-group">
                        <label for="gender">
                          Gender <span>*</span>
                        </label>
                        <select
                          class="form-control"
                          id="gender"
                          required
                          onChange={(e) => {
                            this.setState({ gender: e.target.value });
                          }}
                        >
                          <option selected>Select gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div class="form-group">
                        <label for="age">
                          Age <span>*</span>
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="name"
                          required
                          onChange={(e) => {
                            this.setState({ age: e.target.value });
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="job title">
                      Job Title <span>*</span>
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="job_title"
                      required
                      onChange={(e) => {
                        this.setState({ job_title: e.target.value });
                      }}
                    />
                  </div>
                  <div class="form-group">
                    <label for="department">
                      Department <span>*</span>
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      required
                      onChange={(e) => {
                        this.setState({ department: e.target.value });
                      }}
                    />
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

export const mapStateToProps = (state) => {
  return {
    loading: state.add_employee.get("loading"),
    error: state.add_employee.get("error"),
    message: state.add_employee.get("message"),
  };
};

export default connect(mapStateToProps, { addEmployee })(AddEmployee);
