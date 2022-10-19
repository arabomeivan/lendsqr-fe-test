import "../Css/Dashboardcss/Sidebarcontent.css";
import { Route, Routes, Link } from "react-router-dom";
import briefcase1 from "../images/briefcase 1.png";
import chartbar from "../images/chart-bar 2.png";
import clipboardlist from "../images/clipboard-list 1.png";
import coins_solid from "../images/coins-solid 1.png";
import galaxy from "../images/galaxy 1.png";
import grp104 from "../images/Group 104.png";
import handshake from "../images/handshake-regular 1.png";
import home from "../images/home 1.png";
import bank from "../images/np_bank_148501_000000 1.png";
import scroll from "../images/scroll 1.png";
import sliders from "../images/sliders-h 1.png";
import sack from "../images/sack 1.png";
import usercheck from "../images/user-check 1.png";
import userfriends from "../images/user-friends 1.png";
import usercog from "../images/user-cog 1.png";
import usertimes from "../images/user-times 1.png";
import users1 from "../images/users 1.png";
import piggybank from "../images/piggy-bank 1.png";
import transactions from "../images/icon.png";
import badge from "../images/badge-percent 1.png";




export function Sidebarcontent() {
  return (
    /**Main container for sidebar content */


    
    <div className="row" id="navigationmenu">
      <div className="col-sm-12">
        {/** Switch Organization */}
        <div className="input-group mb-3" id="switchorganizationcontainer">
          <span className="input-group-text" id="breifcasespan">
          <img src={briefcase1} alt="notloading" className='img-fluid sidebaricons'/>
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
          <img src={home} alt="notloading" className='img-fluid sidebaricons'/>
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
            <img src={userfriends} alt="notloading" className='img-fluid sidebaricons'/>
              <span id="nav-text">Users</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/request" className="nav-link">
            <img src={users1} alt="notloading" className='img-fluid sidebaricons'/>
              <span id="nav-text">Guarantors</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/request" className="nav-link">
            <img src={sack} alt="notloading" className='img-fluid sidebaricons'/>
              <span id="nav-text">Loans</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/request" className="nav-link">
            <img src={handshake} alt="notloading" className='img-fluid sidebaricons'/>
              <span id="nav-text">Decision Models</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/request" className="nav-link">
            <img src={piggybank} alt="notloading" className='img-fluid sidebaricons'/>
              <span id="nav-text">Savings</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/request" className="nav-link">
            <img src={grp104} alt="notloading" className='img-fluid sidebaricons'/>
              <span id="nav-text">Loan Requests</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/request" className="nav-link">
            <img src={usercheck} alt="notloading" className='img-fluid sidebaricons'/>
              <span id="nav-text">Whitelist</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/request" className="nav-link">
            <img src={usertimes} alt="notloading" className='img-fluid sidebaricons'/>
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
            <img src={briefcase1} alt="notloading" className='img-fluid sidebaricons'/>
              <span id="nav-text">Organization</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/request" className="nav-link">
            <img src={grp104} alt="notloading" className='img-fluid sidebaricons'/>
              <span id="nav-text">Loan Products</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/request" className="nav-link">
            <img src={bank} alt="notloading" className='img-fluid sidebaricons'/>
              <span id="nav-text">Saving Products</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/request" className="nav-link">
            <img src={coins_solid} alt="notloading" className='img-fluid sidebaricons'/>
              <span id="nav-text">Fees and Charges</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/request" className="nav-link">
            <img src={transactions} alt="notloading" className='img-fluid sidebaricons'/>
              <span id="nav-text">Transactions</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/request" className="nav-link">
            <img src={galaxy} alt="notloading" className='img-fluid sidebaricons'/>
              <span id="nav-text">Services</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/request" className="nav-link">
            <img src={usercog} alt="notloading" className='img-fluid sidebaricons'/>
              <span id="nav-text">Service Account</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/request" className="nav-link">
            <img src={scroll} alt="notloading" className='img-fluid sidebaricons'/>
              <span id="nav-text">Settlements</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/request" className="nav-link">
            <img src={chartbar} alt="notloading" className='img-fluid sidebaricons'/>
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
            <img src={sliders} alt="notloading" className='img-fluid sidebaricons'/>
              <span id="nav-text">Preferences</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/request" className="nav-link">
            <img src={badge} alt="notloading" className='img-fluid sidebaricons'/>
              <span id="nav-text">Fees and Pricing</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/request" className="nav-link">
            <img src={clipboardlist} alt="notloading" className='img-fluid sidebaricons'/>
              <span id="nav-text">Audit Logs</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
