import React, { useEffect, useState } from "react";
import { Navbar } from "../Dashboardcomponents/Navbar";
import { Sidebarcontent } from "../Dashboardcomponents/Sidebarcontent";
import divider from "../images/divider.png";
import backbtn from "../images/backbtn.png";
import verticaline from "../images/verticalline.png";
import avatar from "../images/avatar.png";

import "../Css/Userdetailscss/userdetails.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export const Userdetails = () => {
  const { id } = useParams();

  const [userdetails, setuserdetails] = useState(null as any)

  const ariavaluenow = 75
const ariavaluemin = 0

const ariavaluemax = 100

  const data = "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/" + id;

  useEffect(() => {
    axios.get(data).then((Response) => {
       
      

      setuserdetails(Response.data)
      
     
    });
  }, [data]);

if(userdetails)
{
  return  <>
  <Navbar />

  <div className="row">
    <div className="col-sm-6" id="sidebar">
      {/**Main container for sidebar content */}


      <Sidebarcontent />
    </div>

    <div className="col-sm-6" id="maincontent">
      <div className="container" id="usercontent">

        <Link to='/users'>
        <button type="button" className="btn btn-primary" id="backtousers">
          <img src={backbtn} className="img-fluid" alt="" />
          &nbsp; &nbsp; Back to Users
        </button>
        </Link>
        

        <div className="row">
          <div className="col-sm-6" id="pagetitle">
            User Details
          </div>

          <div className="col-sm-6" id="useractions">
            <button type="button" className="btn btn-outline-danger">
              Blacklist User
            </button>
            <button type="button" className="btn btn-outline-info">
              Activate User
            </button>
          </div>
        </div>

        <div className="row" id="userdetailscontainer">
          <div className="col-sm-12">
            <div className="tab-content" id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="generaldetailscontent"
                role="tabpanel"
                aria-labelledby="nav-home-tab"
              >
                <div className="row" id="shortdetailscon">
                  <div className="col-sm-2">
                    <img
                      src={userdetails.profile.avatar}
                      className="img-fluid rounded-circle"
                      alt=""
                      id="avatar"
                    />
                  </div>

                  <div className="col-sm-2">
                    <div className="row" id="actname">
                      <div className="col-sm-12">{userdetails.profile.firstName} &nbsp; {userdetails.profile.lastName}</div>
                    </div>

                    <div className="row" id="bvn">
                      <div className="col-sm-12">{userdetails.guarantor.accountNumber} </div>
                    </div>
                  </div>

                  <div className="col-sm-2" id="verticalinecolumn">
                    <img
                      src={verticaline}
                      className="img-fluid"
                      alt=""
                      id="verticalline"
                    />
                  </div>

                  <div className="col-sm-2">
                    <div className="row" id="userstier">
                      <div className="col-sm-12">User's Tier</div>
                    </div>

                    <div className="row" id="rating">
                      <div className="col-sm-12">dynamic</div>
                    </div>
                  </div>

                  <div className="col-sm-2" id="verticalinecolumn">
                    <img
                      src={verticaline}
                      className="img-fluid"
                      alt=""
                      id="verticalline"
                    />
                  </div>

                  <div className="col-sm-2">
                    <div className="row" id="bankbalance">
                      <div className="col-sm-12">{userdetails.currency} &nbsp; {userdetails.guarantor.accountBalance}</div>
                    </div>

                    <div className="row" id="bankname">
                      <div className="col-sm-12">{userdetails.profile.bvn}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="documentscontent"
                role="tabpanel"
                aria-labelledby="nav-profile-tab"
              >
                Documents
              </div>
              <div
                className="tab-pane fade"
                id="bankdetailscontent"
                role="tabpanel"
                aria-labelledby="nav-contact-tab"
              >
                Bank Details
              </div>
              <div
                className="tab-pane fade"
                id="loanscontent"
                role="tabpanel"
                aria-labelledby="nav-contact-tab"
              >
                Loans
              </div>
              <div
                className="tab-pane fade"
                id="savingscontent"
                role="tabpanel"
                aria-labelledby="nav-contact-tab"
              >
                Savings
              </div>
              <div
                className="tab-pane fade"
                id="appcontent"
                role="tabpanel"
                aria-labelledby="nav-contact-tab"
              >
                App Content
              </div>
            </div>

            <nav>
              <div
                className="nav nav-tabs userdetailstab"
                id="nav-tab"
                role="tablist"
              >
                <button
                  className="nav-link active userdetailstabcontrol"
                  id="generaldetailscontroltab"
                  data-bs-toggle="tab"
                  data-bs-target="#generaldetailscontent"
                  type="button"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                >
                  General Details
                </button>
                <button
                  className="nav-link userdetailstabcontrol"
                  id="documentscontroltab"
                  data-bs-toggle="tab"
                  data-bs-target="#documentscontent"
                  type="button"
                  role="tab"
                  aria-controls="nav-profile"
                  aria-selected="false"
                >
                  Documents
                </button>
                <button
                  className="nav-link userdetailstabcontrol"
                  id="bankdetailscontroltab"
                  data-bs-toggle="tab"
                  data-bs-target="#bankdetailscontent"
                  type="button"
                  role="tab"
                  aria-controls="nav-contact"
                  aria-selected="false"
                >
                  Bank Details
                </button>
                <button
                  className="nav-link userdetailstabcontrol"
                  id="loanscontroltab"
                  data-bs-toggle="tab"
                  data-bs-target="#loanscontent"
                  type="button"
                  role="tab"
                  aria-controls="nav-contact"
                  aria-selected="false"
                >
                  Loans
                </button>
                <button
                  className="nav-link userdetailstabcontrol"
                  id="savingscontroltab"
                  data-bs-toggle="tab"
                  data-bs-target="#savingscontent"
                  type="button"
                  role="tab"
                  aria-controls="nav-contact"
                  aria-selected="false"
                >
                  Savings
                </button>
                <button
                  className="nav-link userdetailstabcontrol"
                  id="appcontroltab"
                  data-bs-toggle="tab"
                  data-bs-target="#appcontent"
                  type="button"
                  role="tab"
                  aria-controls="nav-contact"
                  aria-selected="false"
                >
                  App and System
                </button>
              </div>
            </nav>
          </div>
        </div>

        {/**Personal Information Container */}
        <div className="row" id="userinfocontainer">
          <div className="col-sm-12">
            <div className="row" id="personalinformation">
              <div className="row sectionheader">
                <div className="col-sm-12">Personal Information</div>
              </div>

              <div className="col-sm-2 personalinfocontainer">
                <div className="row detailtile">
                  <div className="col-sm-12">FULL NAME</div>
                </div>

                <div className="row">
                  <div className="col-sm-12">{userdetails.profile.firstName} &nbsp; {userdetails.profile.lastName}</div>
                </div>

                <div className="row detailtile" id="lowertitle">
                  <div className="col-sm-12 ">MARTIAL STATUS</div>
                </div>

                <div className="row">
                  <div className="col-sm-12">N/A</div>
                </div>
              </div>
              <div className="col-sm-2 personalinfocontainer">
                <div className="row detailtile">
                  <div className="col-sm-12 ">PHONE NUMBER</div>
                </div>

                <div className="row">
                  <div className="col-sm-12">{userdetails.phoneNumber}</div>
                </div>

                <div className="row detailtile" id="lowertitle">
                  <div className="col-sm-12 ">CHILDREN</div>
                </div>

                <div className="row">
                  <div className="col-sm-12">N/A</div>
                </div>
              </div>
              <div className="col-sm-2 personalinfocontainer">
                <div className="row detailtile">
                  <div className="col-sm-12 ">EMAIL ADDRESS</div>
                </div>

                <div className="row">
                  <div className="col-sm-12">{userdetails.email}</div>
                </div>

                <div className="row detailtile" id="lowertitle">
                  <div className="col-sm-12">TYPE OF RESIDENCE</div>
                </div>

                <div className="row">
                  <div className="col-sm-12">{userdetails.profile.address}</div>
                </div>
              </div>
              <div className="col-sm-2 personalinfocontainer">
                <div className="row detailtile">
                  <div className="col-sm-12">BVN</div>
                </div>

                <div className="row">
                  <div className="col-sm-12">{userdetails.profile.bvn}</div>
                </div>
              </div>
              <div className="col-sm-2 personalinfocontainer">
                <div className="row detailtile">
                  <div className="col-sm-12">GENDER</div>
                </div>

                <div className="row">
                  <div className="col-sm-12">{userdetails.profile.gender}</div>
                </div>
              </div>
              <div className="col-sm-2 emptycolumn"></div>
            </div>

            <img src={divider} className="img-fluid" alt="" id="divider" />

            <div className="row sectionheader">
              <div className="col-sm-12">Education and Employment</div>
            </div>

            <div className="row" id="education">
              <div className="col-sm-3 educationcolumns">
                <div className="row detailtile">
                  <div className="col-sm-12">LEVEL OF EDUCATION</div>
                </div>

                <div className="row">
                  <div className="col-sm-12">{userdetails.education.level}</div>
                </div>

                <div className="row detailtile" id="lowertitle">
                  <div className="col-sm-12">OFFICE EMAIL</div>
                </div>

                <div className="row">
                  <div className="col-sm-12">{userdetails.email}</div>
                </div>
              </div>

              <div className="col-sm-3 educationcolumns">
                <div className="row detailtile">
                  <div className="col-sm-12">EMPLOYMENT STATUS</div>
                </div>

                <div className="row">
                  <div className="col-sm-12">{userdetails.education.employmentStatus}</div>
                </div>

                <div className="row detailtile" id="lowertitle">
                  <div className="col-sm-12">MONTHLY INCOME</div>
                </div>

                <div className="row">
                  <div className="col-sm-12">{userdetails.currency} &nbsp; {userdetails.education.monthlyIncome[0]}</div>
                </div>
              </div>

              <div className="col-sm-3 educationcolumns">
                <div className="row detailtile">
                  <div className="col-sm-12">SECTOR OF EMPLOYMENT</div>
                </div>

                <div className="row">
                  <div className="col-sm-12">{userdetails.education.sector}</div>
                </div>

                <div className="row detailtile" id="lowertitle">
                  <div className="col-sm-12">LOAN REPAYMENT</div>
                </div>

                <div className="row">
                  <div className="col-sm-12">{userdetails.education.loanRepayment}</div>
                </div>
              </div>

              <div className="col-sm-3 educationcolumns">
                <div className="row detailtile">
                  <div className="col-sm-12">DURATION</div>
                </div>

                <div className="row">
                  <div className="col-sm-12">{userdetails.education.duration}</div>
                </div>
              </div>
            </div>

            <img src={divider} className="img-fluid" alt="" id="divider" />

            <div className="row sectionheader">
              <div className="col-sm-12">Socials</div>
            </div>

            <div className="row" id="socials">
              <div className="col-sm-4">
                <div className="row detailtile">
                  <div className="col-sm-12">TWITTER</div>
                </div>

                <div className="row">
                  <div className="col-sm-12">{userdetails.socials.twitter}</div>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="row detailtile">
                  <div className="col-sm-12">FACEBOOK</div>
                </div>

                <div className="row">
                  <div className="col-sm-12">{userdetails.socials.facebook}</div>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="row detailtile">
                  <div className="col-sm-12">INSTAGRAM</div>
                </div>

                <div className="row">
                  <div className="col-sm-12">{userdetails.socials.instagram}</div>
                </div>
              </div>
            </div>

            <img src={divider} className="img-fluid" alt="" id="divider" />

            <div className="row sectionheader">
              <div className="col-sm-12">Guarantor</div>
            </div>

            <div className="row" id="guarantor">
              <div className="col-sm-3 guarantorcolumns">
                <div className="row detailtile">
                  <div className="col-sm-12">FULL NAME</div>
                </div>

                <div className="row">
                  <div className="col-sm-12">{userdetails.guarantor.firstName}{userdetails.guarantor.lastName}</div>
                </div>
              </div>

              <div className="col-sm-3 guarantorcolumns">
                <div className="row detailtile">
                  <div className="col-sm-12">PHONE NUMBER</div>
                </div>

                <div className="row">
                  <div className="col-sm-12">{userdetails.guarantor.phoneNumber}</div>
                </div>
              </div>

              <div className="col-sm-3 guarantorcolumns">
                <div className="row detailtile">
                  <div className="col-sm-12">EMAIL ADDRESS</div>
                </div>

                <div className="row">
                  <div className="col-sm-12">N/A</div>
                </div>
              </div>

              <div className="col-sm-3 guarantorcolumns">
                <div className="row detailtile">
                  <div className="col-sm-12">RELATIONSHIP</div>
                </div>

                <div className="row">
                  <div className="col-sm-12">N/A</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>
  
}

  return (
    <div className="progress">
    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow={ariavaluenow} aria-valuemin={ariavaluemin} aria-valuemax={ariavaluemax}></div>
  </div>
  );
};

