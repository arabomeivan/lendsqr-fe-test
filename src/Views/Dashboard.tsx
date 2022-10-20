import "../Css/Dashboardcss/Dashboard.css";
import { Navbar } from "../Dashboardcomponents/Navbar";

import { Sidebarcontent } from "../Dashboardcomponents/Sidebarcontent";

export function Dashboard() {
  return (
    <>
      <Navbar />
      <div className="row">
        <div className="col-sm-6" id="sidebar">
          <Sidebarcontent />
        </div>

        <div className="col-sm-6" id="maincontent">
          <div className="container"></div>
        </div>
      </div>
    </>
  );
}
