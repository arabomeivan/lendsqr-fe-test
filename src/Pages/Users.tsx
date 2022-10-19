import "../Css/Dashboardcss/Dashboard.css";
import '../Css/Usercontentcss/usercontent.css'
import "../Css/Dashboardcss/Sidebarcontent.css";
import { Usercontent } from "../Usercomponents/Usercontent";
import { Navbar } from "../Dashboardcomponents/Navbar";
import { Sidebarcontent } from "../Dashboardcomponents/Sidebarcontent";

export function Users() {
  return (
    <>
      <Navbar />
      <div className="row">
        <div className="col-sm-6" id="sidebar">
          {/**Main container for sidebar content */}

          <Sidebarcontent />
        </div>

        <div className="col-sm-6" id="maincontent">
          <div className="container" id="usercontent">
            <Usercontent></Usercontent>
          </div>
        </div>
      </div>
    </>
  );
}
