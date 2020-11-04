import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import Header from "./nav/Header";
import Sidebar from "./nav/Sidebar";
import isLoggedIn from "../utils";
import { updateEmployee } from "../actions";

class EditEmployee extends Component {
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
      _method: "PUT",
    };
    this.id = this.props.match.params.id;
    this.TOKEN = localStorage.getItem("token");
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    if (!isLoggedIn()) {
      this.props.history.push({
        pathname: "/",
      });
    }
    axios
      .get(`${process.env.REACT_APP_PROD_URL}/employee/${this.id}`, {
        headers: {
          Authorization: `Bearer ${this.TOKEN}`,
        },
      })
      .then((res) => {
        this.setState({ first_name: res.data.employee.first_name });
        this.setState({ last_name: res.data.employee.last_name });
        this.setState({ email: res.data.employee.email });
        this.setState({ phone: res.data.employee.phone });
        this.setState({ address: res.data.employee.address });
        this.setState({ gender: res.data.employee.gender });
        this.setState({ age: res.data.employee.age });
        this.setState({ job_title: res.data.employee.job_title });
        this.setState({ department: res.data.employee.department });
      });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.updateEmployee(this.state, this.id);
  }
  render() {
    return (
      <div>
        <Header />

        <div class="container-fluid">
          <div class="row">
            <Sidebar page="manage-employees" />
            <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
              <div class="d-flex flex-column justify-content-start  flex-wrap flex-md-nowrap pt-3 pb-2 mb-3 border-bottom">
                <h1 class="h2">Edit Employee</h1>
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
                          value={this.state.first_name}
                          onChange={(e) => {
                            this.setState({ first_name: e.target.value });
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div class="form-group">
                        <label for="name">
                          Last name <span>*</span>
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="name"
                          value={this.state.last_name}
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
                      value={this.state.email}
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
                      value={this.state.phone}
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
                      value={this.state.address}
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
                          onChange={(e) => {
                            this.setState({ gender: e.target.value });
                          }}
                        >
                          <option
                            selected={
                              this.state.gender === "male" ? "selected" : ""
                            }
                            value="male"
                          >
                            Male
                          </option>
                          <option
                            selected={
                              this.state.gender === "female" ? "selected" : ""
                            }
                            value="female"
                          >
                            Female
                          </option>
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
                          value={this.state.age}
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
                      value={this.state.job_title}
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
                      value={this.state.department}
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
    loading: state.update_employee.get("loading"),
    error: state.update_employee.get("error"),
    message: state.update_employee.get("message"),
  };
};

export default connect(mapStateToProps, { updateEmployee })(EditEmployee);
