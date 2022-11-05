/* eslint-disable jsx-a11y/anchor-is-valid */
import "../Css/Usercontentcss/usercontent.css";
import { Userstable } from "./Userstable";
import coins from "../images/coins.png";
import file from "../images/file.png";
import users from "../images/users.png";
import previous from "../images/forward.png"
import next from "../images/previous.png"
import activeusers from "../images/activeusers.png";
export function Usercontent(props: any) {
  const loading = props.loading;
  const tablevisibility = props.tablevisibility;

  const totalusers = props.totalusers;
  let usersperpage = props.usersperpage;
  const pagenumbers = [];

  let paginate = props.paginate

  const pagenumberss = totalusers / usersperpage;

  for (let i = 1; i <= pagenumberss; i++) {
    pagenumbers.push(i);
  }

  return (
    <div className="row">
      <div className="col-sm-3" id="users">
        <img src={users} alt="notloading" className="img-fluid icons" />

        <div className="row" id="userstitle">
          <div className="col-sm-12">USERS</div>
        </div>

        <div className="row numberofusers">
          <div className="col-sm-12">{users.length}</div>
        </div>
      </div>

      <div className="col-sm-3" id="activeusers">
        <img src={activeusers} alt="notloading" className="img-fluid icons" />

        <div className="row" id="activeuserstitle">
          <div className="col-sm-12">ACTIVE USERS</div>
        </div>

        <div className="row">
          <div className="col-sm-12"></div>
        </div>
      </div>

      <div className="col-sm-3" id="usersloans">
        <img src={file} alt="notloading" className="img-fluid icons" />

        <div className="row" id="usersloanstitle">
          <div className="col-sm-12">USERS WITH LOANS</div>
        </div>

        <div className="row">
          <div className="col-sm-12"></div>
        </div>
      </div>
      <div className="col-sm-3" id="usersavings">
        <img src={coins} alt="notloading" className="img-fluid icons" />

        <div className="row" id="usersavingstitle">
          <div className="col-sm-12">USERS WITH SAVINGS</div>
        </div>

        <div className="row">
          <div className="col-sm-12"></div>
        </div>
      </div>

      <Userstable
        fetchedUsers={props.fetchedUsers}
        loading={loading}
        tablevisibility={tablevisibility}
      ></Userstable>

      {/** Pagination List*/}

      
        <nav aria-label="Page navigation example">

          
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="#" id="previous">
                <img className="img-fluid historymode" src={next} alt="" />
              </a>
            </li>
           
            {
      pagenumbers.map((number, index:number) => (
            <li className="page-item" key={index}>
              <a className="page-link" href="#" onClick={()=> paginate(number)} id='numberitems'>
                {number}
              </a>
            </li>

     )) }

            <li className="page-item">
              <a className="page-link" href="#" id="next">
              <img className="img-fluid historymode" src={previous} alt="" />
              </a>
            </li>
          </ul>
        </nav>
      
    </div>
  );
}
