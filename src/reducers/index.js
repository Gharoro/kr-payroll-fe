import { combineReducers } from "redux";
import add_employee from "./add-employee";
import all_employees from "./all-employees";
import update_employee from "./update-employee";
import generate_payslip from "./generate-payslip";
import employee_reports from "./employee-reports";
import get_payroll from "./get-payroll";
import update_payroll from "./update-payroll";
import employee_profile from "./employee-profile";
import employee_salary from "./employee-salary";
import employee_payslip from "./employee-payslip";

export default combineReducers({
  add_employee,
  all_employees,
  update_employee,
  generate_payslip,
  employee_reports,
  get_payroll,
  update_payroll,
  employee_profile,
  employee_salary,
  employee_payslip,
});
