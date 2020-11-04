import React, { Component } from "react";
import axios from "axios";

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const config = {
      method: "post",
      url: `${process.env.REACT_APP_PROD_URL}/login`,

      data: this.state,
    };
    axios(config)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        if (response.data.user.role === "admin") {
          sessionStorage.setItem("c_name", response.data.user.company_name);
          sessionStorage.setItem(
            "c_address",
            response.data.user.company_address
          );
          sessionStorage.setItem(
            "c_contact",
            response.data.user.company_contact
          );
          this.props.history.push({
            pathname: "/admin/dashboard",
            user: response.data.user,
          });
        } else {
          this.props.history.push({
            pathname: "/employee/profile",
            user: response.data.user,
          });
        }
      })
      .catch((error) => {
        this.setState({ error: error.response.data.error });
      });
  }
  render() {
    return (
      <div className="container auth-form">
        <h3 className="text-center">Welcome! Please login</h3>

        <div className="row mx-auto">
          <div className="col-md-6 mx-auto shadow p-3 mb-5 bg-white rounded">
            {this.state.error ? (
              <div
                class="alert alert-warning alert-dismissible fade show"
                role="alert"
              >
                <strong>{this.state.error}</strong>
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
                <label for="email">Email</label>
                <input
                  onChange={(e) => {
                    this.setState({ email: e.target.value });
                  }}
                  type="email"
                  class="form-control"
                  id="email"
                  required
                />
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input
                  onChange={(e) => {
                    this.setState({ password: e.target.value });
                  }}
                  type="password"
                  class="form-control"
                  id="password"
                  required
                />
              </div>
              <button type="submit" class="btn btn-primary mb-2">
                Login
              </button>
              <p>
                Admin email: admin@kr.com <br />
                Admin password: 12345
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
