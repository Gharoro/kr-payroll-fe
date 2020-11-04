import { makeAsyncActionSet, makeAsyncAction } from "./helper";

export const ADD_EMPLOYEE = makeAsyncActionSet("ADD_EMPLOYEE");
export function addEmployee(data) {
  return makeAsyncAction(ADD_EMPLOYEE, "/employee/add", "POST", data);
}

export const All_EMPLOYEES = makeAsyncActionSet("All_EMPLOYEES");
export function allEmployees() {
  return makeAsyncAction(All_EMPLOYEES, "/employee/all", "GET");
}

export const UPDATE_EMPLOYEE = makeAsyncActionSet("UPDATE_EMPLOYEE");
export function updateEmployee(data, id) {
  return makeAsyncAction(
    UPDATE_EMPLOYEE,
    `/employee/${id}/update`,
    "POST",
    data
  );
}

export const GENERATE_PAYSLIP = makeAsyncActionSet("GENERATE_PAYSLIP");
export function generatePayslip(month, id) {
  return makeAsyncAction(
    GENERATE_PAYSLIP,
    `/admin/${id}/generate_payslip?month=${month}`,
    "GET"
  );
}

export const EMPLOYEE_REPORTS = makeAsyncActionSet("EMPLOYEE_REPORTS");
export function employeeReports() {
  return makeAsyncAction(EMPLOYEE_REPORTS, "/employee/report/all", "GET");
}

export const GET_PAYROLL = makeAsyncActionSet("GET_PAYROLL");
export function getEmployeePayroll(id) {
  return makeAsyncAction(GET_PAYROLL, `/admin/${id}/employee_payroll`, "GET");
}

export const UPDATE_PAYROLL = makeAsyncActionSet("UPDATE_PAYROLL");
export function updatePayroll(data, id) {
  return makeAsyncAction(UPDATE_PAYROLL, `/admin/${id}/payroll`, "POST", data);
}

export const GET_EMPLOYEE = makeAsyncActionSet("GET_EMPLOYEE");
export function getEmployee() {
  return makeAsyncAction(GET_EMPLOYEE, "/employee/user/profile", "GET");
}

export const GET_SALARY = makeAsyncActionSet("GET_SALARY");
export function getSalary() {
  return makeAsyncAction(GET_SALARY, "/employee/salary", "GET");
}

export const GET_PAYSLIP = makeAsyncActionSet("GET_PAYSLIP");
export function getPayslip(month) {
  return makeAsyncAction(
    GET_PAYSLIP,
    `/employee/payslip?month=${month}`,
    "GET"
  );
}
