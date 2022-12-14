import union from '../images/Union.png'
import lendsqr from '../images/lendsqr.png'
import { Link } from "react-router-dom";
export function Login()
{
    return(
        <div className="row">
       
{/*LEFT SECTION OF PAGE*/}

<div className="col-sm-6" id='leftsection'>
  {/*Logo Section*/}
  <div className="row" id='logo'>
    <div className="col-sm-12">
  <img src={union} alt="not loading" className="img-fluid" id='union' />
  <img src={lendsqr} alt="not loading" className="img-fluid" id='lendsqr'/>
    </div>
  </div>

  {/*Heroo Section*/}

  <div className="row">
    <div className="col-sm-12" id="heroosection">
     
    </div>
  </div>
</div>

{/*RIGHT SECTION OF PAGE*/}
<div className="col-sm-6" id="rightsection">

  {/*Welcome Text*/}
  <div className="row" id="welcometext">
    <div className="col-sm-12">
    Welcome!
    </div>
  </div>

  
  
  {/*LoginDetailsText*/}
  <div className="row" id="logindetailstext">
    <div className="col-sm-12">
    Enter details to login.
    </div>
  </div>



{/**LOGIN FORM*/}

<form action="" id='logincredentials'>

  {/** email */}
 <div className="form-floating mb-3">
<input type="email" className="form-control" id="email" placeholder="name@example.com"></input>
   <label htmlFor="email">Email address</label>
 </div>

 {/** password */}
<div className="form-floating">
<input type="password" className="form-control" id="password" placeholder="Password"></input>
<label htmlFor="password">Password</label>
</div>

{/** Forgot password */}
<div className="row" id='forgotpasswordcontainer'>
  <div className="col-sm-12">
    <a href="#" id='forgotpasswordlink'>FORGOT PASSWORD?</a>
  </div>
</div>

{/**login button */}
<Link to="/users"><button className="btn btn-primary" type="button" id='loginbtn'>Login</button></Link>
 </form>

  

</div>
</div>

    );
}