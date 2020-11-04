import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import Header from "./nav/Header";
import Sidebar from "./nav/Sidebar";
import isLoggedIn from "../utils";
import { allEmployees } from "../actions";

class Remittances extends Component {
  constructor(props) {
    super(props);
    this.makeRemittance = this.makeRemittance.bind(this);
    this.TOKEN = localStorage.getItem("token");
  }
  componentDidMount() {
    if (!isLoggedIn()) {
      this.props.history.push({
        pathname: "/",
      });
    }
    this.props.allEmployees();
  }
  makeRemittance(id, query) {
    const config = {
      method: "post",
      url: `${process.env.REACT_APP_LOCAL_URL}/admin/${id}/remittance?query=${query}`,
      headers: {
        Authorization: `Bearer ${this.TOKEN}`,
      },
    };

    axios(config)
      .then(function (response) {
        alert(response.data.message);
        window.location.reload();
      })
      .catch(function (error) {
        alert(error.response.data.error);
        window.location.reload();
      });
  }
  render() {
    const employees = this.props.employees.get("data");
    return (
      <div>
        <Header />

        <div class="container-fluid">
          <div class="row">
            <Sidebar page="remittance" />
            <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
              <div class="d-flex flex-column justify-content-start  flex-wrap flex-md-nowrap pt-3 pb-2 mb-3 border-bottom">
                <h1 class="h2">Statutory Remittances</h1>
              </div>
            </main>
            {!employees
              ? "Loading..."
              : employees.map((employee) => (
                  <div class="card employee-card col-md-9">
                    <div class="card-body">
                      <div className="">
                        <h4 className="font-weight-bolder">
                          Employee: {employee.get("first_name")}{" "}
                          {employee.get("last_name")}
                        </h4>
                        <p>Position: {employee.get("job_title")}</p>
                        <p>
                          PAYE:{" "}
                          {!employee.get("paye_status") ? (
                            <strong>Pending</strong>
                          ) : (
                            employee.get("paye_status")
                          )}{" "}
                          | Pension:{" "}
                          {!employee.get("pension_status") ? (
                            <strong>Pending</strong>
                          ) : (
                            employee.get("pension_status")
                          )}
                        </p>
                        <p>
                          NSITF:{" "}
                          {!employee.get("nsitf_status") ? (
                            <strong>Pending</strong>
                          ) : (
                            employee.get("nsitf_status")
                          )}{" "}
                          | NHF:{" "}
                          {!employee.get("nhf_status") ? (
                            <strong>Pending</strong>
                          ) : (
                            employee.get("nhf_status")
                          )}
                        </p>
                      </div>

                      <button
                        type="button"
                        class="btn btn-primary mr-2 mb-2"
                        onClick={() => {
                          this.makeRemittance(employee.get("id"), "paye");
                        }}
                      >
                        Remit PAYE
                      </button>
                      <button
                        type="button"
                        class="btn btn-warning mr-2 mb-2"
                        onClick={() => {
                          this.makeRemittance(employee.get("id"), "pension");
                        }}
                      >
                        Remit Pension
                      </button>
                      <button
                        type="button"
                        class="btn btn-info mr-2 mb-2"
                        onClick={() => {
                          this.makeRemittance(employee.get("id"), "nsitf");
                        }}
                      >
                        Remit NSITF
                      </button>
                      <button
                        type="button"
                        class="btn btn-secondary mr-2 mb-2"
                        onClick={() => {
                          this.makeRemittance(employee.get("id"), "nhf");
                        }}
                      >
                        Remit NHF
                      </button>
                    </div>
                  </div>
                ))}
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
  };
};

export default connect(mapStateToProps, { allEmployees })(Remittances);
