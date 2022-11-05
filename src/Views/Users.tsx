import "../Css/Dashboardcss/Dashboard.css";
import '../Css/Usercontentcss/usercontent.css'
import "../Css/Dashboardcss/Sidebarcontent.css";
import { Usercontent } from "../Usercomponents/Usercontent";
import { Navbar } from "../Dashboardcomponents/Navbar";
import { Sidebarcontent } from "../Dashboardcomponents/Sidebarcontent";
import axios from 'axios'
import { useState, useEffect, SetStateAction } from "react";

export function Users() {


  const url = 'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users'
  const [users, setUsers] = useState([])

  const [loading, setloading] = useState(true)
  const [tablevisibility, settablevisibility] = useState(false)

  //Pagination to display 10 users per page

  const [pagenumber, setpagenumber] = useState(1)
  const [usersperpage, setusersperpage] = useState(10)
 





  useEffect(()=>
  {
    axios.get(url).then(Response=>
      { 
         setUsers(Response.data)
         
         setloading(false)
         settablevisibility(true)
      })



  }, [])
  

  const indexoflastpage = pagenumber * usersperpage
  const indexoffirstpage = indexoflastpage - usersperpage
  let [currentusers] = useState([])

  currentusers = users.slice(indexoffirstpage, indexoflastpage)
 
 
  const paginate = (pageNumber:number)=> setpagenumber(pageNumber)
  

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
            <Usercontent fetchedUsers={currentusers} loading={loading} tablevisibility={tablevisibility}  usersperpage={usersperpage} totalusers={users.length} paginate={paginate}></Usercontent>
          </div>
        </div>
      </div>
    </>
  );
}
