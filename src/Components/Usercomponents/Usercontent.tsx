import '../Css/Usercontentcss/usercontent.css'
import { Userstable } from './Userstable';
import coins from "../images/coins.png";
import file from "../images/file.png";
import users from "../images/users.png";
import activeusers from "../images/activeusers.png";
export function Usercontent(){
    return(

        <div className="row">
            <div className="col-sm-3" id='users'>

                 <img src={users} alt="notloading" className='img-fluid icons'/>
                

              <div className="row" id='userstitle'>
                <div className="col-sm-12">
                   USERS
                </div>
              </div>

              <div className="row">
                <div className="col-sm-12">

                </div>
              </div>

            </div>

            <div className="col-sm-3" id='activeusers'>

            <img src={activeusers} alt="notloading" className='img-fluid icons'/>

              <div className="row" id='activeuserstitle'>
                <div className="col-sm-12">
                   ACTIVE USERS
                </div>
              </div>

              <div className="row">
                <div className="col-sm-12">
              
                </div>
              </div>
            </div>
            
            <div className="col-sm-3" id='usersloans'>

            <img src={file} alt="notloading" className='img-fluid icons'/>

              <div className="row" id='usersloanstitle'>
                <div className="col-sm-12">
                     USERS WITH LOANS
                </div>
              </div>

              <div className="row">
                <div className="col-sm-12">

                </div>
              </div>
            </div>
            <div className="col-sm-3" id='usersavings'>
                
            <img src={coins} alt="notloading" className='img-fluid icons'/>

              <div className="row" id='usersavingstitle'>
                <div className="col-sm-12">
                  USERS WITH SAVINGS
                </div>
              </div>

              <div className="row">
                <div className="col-sm-12">

                </div>
              </div>
            </div>

            <Userstable></Userstable>
        </div>
    );
}