import React, { Component } from "react";
import Header from "./nav/Header";
import Sidebar from "./nav/Sidebar";

export default class EditEmployee extends Component {
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
                <form action="/admin/dashboard">
                  <div class="form-group">
                    <label for="name">
                      Name <span>*</span>
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      value="Lanre Phillips"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label for="email">
                      Email <span>*</span>
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      value="lanrephilips@gmail.com"
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
                      value="08144618246"
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
                      value=""
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
                          <option selected value="male">
                            Male
                          </option>
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
                          value="33 years"
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
                      value="Account Manager"
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
