import React from "react";

export default function EmployeeSidebar(props) {
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
                props.page === "profile" ? "nav-link active" : "nav-link"
              }
              href="/employee/profile"
            >
              <span data-feather="home"></span>
              Profile <span class="sr-only"></span>
            </a>
          </li>
          <li class="nav-item">
            <a
              className={
                props.page === "salary" ? "nav-link active" : "nav-link"
              }
              href="/employee/salary"
            >
              <span data-feather="file"></span>
              Salary Details
            </a>
          </li>
          <li class="nav-item">
            <a
              className={
                props.page === "payslip" ? "nav-link active" : "nav-link"
              }
              href="/employee/1/payslips"
            >
              <span data-feather="shopping-cart"></span>
              Payslips
            </a>
          </li>
          <li class="nav-item">
            <a
              className={
                props.page === "contributions" ? "nav-link active" : "nav-link"
              }
              href="/employee/contributions"
            >
              <span data-feather="users"></span>
              Contributions
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
