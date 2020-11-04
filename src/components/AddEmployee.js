import React, { Component } from "react";
import Header from "./nav/Header";
import Sidebar from "./nav/Sidebar";

export default class AddEmployee extends Component {
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
                <form action="/admin/dashboard">
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
                    />
                  </div>
                  <div className="form-row">
                    <div className="col-md-6">
                      <div class="form-group">
                        <label for="gender">
                          Gender <span>*</span>
                        </label>
                        <select class="form-control" id="gender">
                          <option value="male">Male</option>
                          <option value="female">Female</option>
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
