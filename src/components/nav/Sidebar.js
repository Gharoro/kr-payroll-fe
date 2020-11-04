import React from "react";

export default function Sidebar(props) {
  return (
    <nav
      id="sidebarMenu"
      class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
    >
      <div class="sidebar-sticky pt-3">
        <ul class="nav flex-column">
          <li class="nav-item">
            <a
              className={
                props.page === "dashboard" ? "nav-link active" : "nav-link"
              }
              href="/admin/dashboard"
            >
              <span data-feather="home"></span>
              Dashboard <span class="sr-only"></span>
            </a>
          </li>
          <li class="nav-item">
            <a
              className={
                props.page === "add-employee" ? "nav-link active" : "nav-link"
              }
              href="/admin/add-employee"
            >
              <span data-feather="file"></span>
              Add an Employee
            </a>
          </li>
          <li class="nav-item">
            <a
              className={
                props.page === "manage-employees"
                  ? "nav-link active"
                  : "nav-link"
              }
              href="/admin/manage-employees"
            >
              <span data-feather="shopping-cart"></span>
              Manage Employees
            </a>
          </li>
          <li class="nav-item">
            <a
              className={
                props.page === "payslip" ? "nav-link active" : "nav-link"
              }
              href="/admin/payslips"
            >
              <span data-feather="users"></span>
              Payslips
            </a>
          </li>
          <li class="nav-item">
            <a
              className={
                props.page === "reports" ? "nav-link active" : "nav-link"
              }
              href="/admin/reports"
            >
              <span data-feather="bar-chart-2"></span>
              Reports
            </a>
          </li>
        </ul>

        <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
          <span>Tax Fillings</span>
          <a
            class="d-flex align-items-center text-muted"
            href="#"
            aria-label="Add a new report"
          >
            <span data-feather="plus-circle"></span>
          </a>
        </h6>
        <ul class="nav flex-column mb-2">
          <li class="nav-item">
            <a
              className={
                props.page === "remittance" ? "nav-link active" : "nav-link"
              }
              href="/admin/remittances"
            >
              <span data-feather="file-text"></span>
              Statutory Remittances
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span data-feather="file-text"></span>
              Schedule Remittances
            </a>
          </li>
        </ul>
        <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
          <span>Compensation</span>
          <a
            class="d-flex align-items-center text-muted"
            href="#"
            aria-label="Add a new report"
          >
            <span data-feather="plus-circle"></span>
          </a>
        </h6>
        <ul class="nav flex-column mb-2">
          <li class="nav-item">
            <a
              className={
                props.page === "payroll" ? "nav-link active" : "nav-link"
              }
              href="/admin/manage-payrolls"
            >
              <span data-feather="file-text"></span>
              Manage Payrolls
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span data-feather="file-text"></span>
              Reviews
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
