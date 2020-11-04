import React, { Component } from "react";
import Header from "./nav/Header";
import Sidebar from "./nav/Sidebar";

export default class AdminDashboard extends Component {
  render() {
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

            <div class="card employee-card col-md-9">
              <div class="card-body">
                <div className="">
                  <h4 className="font-weight-bolder">
                    Employee: Lanre Phillips
                  </h4>
                  <p>Position: Account Manager | Net Salary: N350,000</p>
                  <p>PAYE: N35,000 (15%) | Pension: N20,000 (20%)</p>
                  <p>NSITF: N25,000 (25%) | NHF: N15,000 (5%)</p>
                </div>

                <button type="button" class="btn btn-primary mr-2 mb-2">
                  Remit PAYE
                </button>
                <button type="button" class="btn btn-warning mr-2 mb-2">
                  Remit Pension
                </button>
                <button type="button" class="btn btn-info mr-2 mb-2">
                  Remit NSITF
                </button>
                <button type="button" class="btn btn-secondary mr-2 mb-2">
                  Remit NHF
                </button>
        
              </div>
            </div>
         
          </div>
        </div>
      </div>
    );
  }
}
