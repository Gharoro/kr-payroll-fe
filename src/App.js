import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import AdminDashboard from "./components/AdminDashboard";
import AddEmployee from "./components/AddEmployee";
import ManageEmployee from "./components/ManageEmployee";
import EditEmployee from "./components/EditEmployee";
import Payslips from "./components/Payslips";
import Reports from "./components/Reports";
import Remittances from "./components/Remittances";
import ManagePayroll from "./components/ManagePayroll";
import EmployeeDashboard from "./components/EmployeeDashboard";
import Salary from "./components/Salary";
import EmployeePayslip from "./components/EmployeePayslip";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path={"/"} exact component={LandingPage}></Route>
          <Route
            path={"/admin/dashboard"}
            exact
            component={AdminDashboard}
          ></Route>
          <Route
            path={"/admin/add-employee"}
            exact
            component={AddEmployee}
          ></Route>
          <Route
            path={"/admin/manage-employees"}
            exact
            component={ManageEmployee}
          ></Route>
          <Route
            path={"/employee/:id/edit"}
            exact
            component={EditEmployee}
          ></Route>
          <Route path={"/admin/payslips"} exact component={Payslips}></Route>
          <Route path={"/admin/reports"} exact component={Reports}></Route>
          <Route
            path={"/admin/remittances"}
            exact
            component={Remittances}
          ></Route>
          <Route
            path={"/admin/manage-payrolls"}
            exact
            component={ManagePayroll}
          ></Route>
          <Route
            path={"/employee/profile"}
            exact
            component={EmployeeDashboard}
          ></Route>
          <Route path={"/employee/salary"} exact component={Salary}></Route>
          <Route
            path={"/employee/payslips"}
            exact
            component={EmployeePayslip}
          ></Route>
        </div>
      </Router>
    );
  }
}
