import "../Css/Dashboardcss/Dashboard.css";
import '../Css/Usercontentcss/usercontent.css'
import "../Css/Dashboardcss/Sidebarcontent.css";
import { Usercontent } from "../Usercomponents/Usercontent";
import { Navbar } from "../Dashboardcomponents/Navbar";
import { Sidebarcontent } from "../Dashboardcomponents/Sidebarcontent";
import axios from 'axios'
import { useState, useEffect } from "react";

export function Users() {


  const url = 'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users'
  const [users, setusers] = useState([])

  useEffect(()=>
  {
    axios.get(url).then(response =>
      {
        setusers(response.data)
      })
      
  }, [url])

  

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
            <Usercontent fetchedUsers={users}></Usercontent>
          </div>
        </div>
      </div>
    </>
  );
}
