import React, { Component } from "react";

export default class LandingPage extends Component {
  render() {
    return (
      <div className="container auth-form">
        <h3 className="text-center">Welcome! Please login</h3>
        <div className="row mx-auto">
          <div className="col-md-6 mx-auto shadow p-3 mb-5 bg-white rounded">
            <form action="/admin/dashboard">
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" id="email" required />
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input
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
