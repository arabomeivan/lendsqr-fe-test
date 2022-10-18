import "../Css/Dashboardcss/Sidebarcontent.css";
import { Route, Routes, Link } from "react-router-dom";
export function Sidebarcontent() {
  return (
    /**Main container for sidebar content */

    <div className="row" id="navigationmenu">
      <div className="col-sm-12">
        {/** Switch Organization */}
        <div className="input-group mb-3" id="switchorganizationcontainer">
          <span className="input-group-text" id="breifcasespan">
            <i className="fa-solid fa-briefcase"></i>
          </span>
          <div className="row" id="switchoragnizationtext">
            <div className="col-sm-12">Switch Organization</div>
          </div>
          <span className="input-group-text" id="dropdownspan">
            <i className="fa-solid fa-caret-down" id="dropdwonicon"></i>
          </span>
        </div>

        {/** Dashboard */}
        <div className="input-group mb-3" id="dashboardcontainer">
          <span className="input-group-text" id="homespan">
            <i className="fa-solid fa-house"></i>
          </span>
          <div className="row" id="dashboardtext">
            <div className="col-sm-12">Dashboard</div>
          </div>
        </div>

        {/**Customers */}
        <div className="row" id="customerscontainer">
          <div className="col-sm-12">Customers</div>
        </div>

        <ul className="nav nav-tabs flex-column">
          <li className="nav-item">
            <Link to="/users" className="nav-link">
              <i className="fa-solid fa-users"></i>&nbsp;&nbsp;
              <span id="nav-text">Users</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/request" className="nav-link">
              <i className="fa-solid fa-users"></i>&nbsp;&nbsp;
              <span id="nav-text">Guarantors</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/request" className="nav-link">
              <i className="fa-solid fa-sack-dollar"></i>&nbsp;&nbsp;
              <span id="nav-text">Loans</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/request" className="nav-link">
              <i className="fa-solid fa-handshake"></i>&nbsp;&nbsp;
              <span id="nav-text">Decision Models</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/request" className="nav-link">
              <i className="fa-solid fa-piggy-bank"></i>&nbsp;&nbsp;
              <span id="nav-text">Savings</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/request" className="nav-link">
              <i className="fa-solid fa-hand-holding-dollar"></i>&nbsp;&nbsp;
              <span id="nav-text">Loan Requests</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/request" className="nav-link">
              <i className="fa-solid fa-user-check"></i>&nbsp;&nbsp;
              <span id="nav-text">Whitelist</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/request" className="nav-link">
              <i className="fa-solid fa-user-xmark"></i>&nbsp;&nbsp;
              <span id="nav-text">Karma</span>
            </Link>
          </li>
        </ul>

        {/**Businesses */}
        <div className="row" id="customerscontainer">
          <div className="col-sm-12">Businesses</div>
        </div>

        <ul className="nav nav-tabs flex-column">
          <li className="nav-item">
            <Link to="/charts" className="nav-link">
              <i className="fa-solid fa-briefcase"></i>&nbsp;&nbsp;
              <span id="nav-text">Organization</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/request" className="nav-link">
              <i className="fa-solid fa-hand-holding-dollar"></i>&nbsp;&nbsp;
              <span id="nav-text">Loan Products</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/request" className="nav-link">
              <i className="fa-solid fa-building-columns"></i>&nbsp;&nbsp;
              <span id="nav-text">Saving Products</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/request" className="nav-link">
              <i className="fa-solid fa-coins"></i>&nbsp;&nbsp;
              <span id="nav-text">Fees and Charges</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/request" className="nav-link">
              <i className="fa-solid fa-comments-dollar"></i>&nbsp;&nbsp;
              <span id="nav-text">Transactions</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/request" className="nav-link">
              <i className="fa-sharp fa-solid fa-gears"></i>&nbsp;&nbsp;
              <span id="nav-text">Services</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/request" className="nav-link">
              <i className="fa-solid fa-user-gear"></i>&nbsp;&nbsp;
              <span id="nav-text">Service Account</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/request" className="nav-link">
              <i className="fa-solid fa-scroll"></i>&nbsp;&nbsp;
              <span id="nav-text">Settlements</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/request" className="nav-link">
              <i className="fa-solid fa-chart-column"></i>&nbsp;&nbsp;
              <span id="nav-text">Reports</span>
            </Link>
          </li>
        </ul>

        {/**Settings */}
        <div className="row" id="customerscontainer">
          <div className="col-sm-12">Settings</div>
        </div>

        <ul className="nav nav-tabs flex-column">
          <li className="nav-item">
            <Link to="/charts" className="nav-link">
              <i className="fa-solid fa-sliders"></i>&nbsp;&nbsp;
              <span id="nav-text">Preferences</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/request" className="nav-link">
              <i className="fa-solid fa-percent"></i>&nbsp;&nbsp;
              <span id="nav-text">Fees and Pricing</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/request" className="nav-link">
              <i className="fa-solid fa-clipboard-list"></i>&nbsp;&nbsp;
              <span id="nav-text">Audit Logs</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
