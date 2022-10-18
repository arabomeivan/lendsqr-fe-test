import '../Css/Dashboardcss/Dashboard.css';
import union from '../images/Union.png'
import lendsqr from '../images/lendsqr.png'

export function Navbar()
{
    return(

        <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top" id="navbar">
  <div className="container-fluid" id="navcontent">
            
{/*Logo Section*/}
<div className="row" id='logo'>
    <div className="col-md-12">
    <img src={union} alt="not loading" className="img-fluid" id='union' />
  <img src={lendsqr} alt="not loading" className="img-fluid" id='lendsqr'/>
    </div>
  </div>

  
  <div className="input-group mb-3" id="searchboxcontainer">
  <input type="text" className="form-control" placeholder="Search for anything " aria-label="Username" aria-describedby="basic-addon1" id="searchbox"></input>
  <span className="input-group-text" id="basic-addon1"><i className="fa-solid fa-magnifying-glass" id='searchicon'></i></span>
</div>

    
      <form className="d-flex rightcontent" id='controlitems'>

        {/**Docs*/}
       <div className="row" id='docs'>
        <div className="col-md-12">
           <a href="#" id='linktodocs'>Docs</a>
        </div>
       </div>
        
        {/**Notification Bell */}
       <div className="row" id='bellcontainer'>
        <div className="col-md-12">
        <i className="fa-regular fa-bell" id='bellicon'></i>
        </div>
       </div>

       {/**Profile Picture*/}
       <div className="row" id='profilepicturecontainer'>
        <div className="col-md-12 rounded-circle" id='profilepicture'>
        </div>
       </div>

       {/**Company Name*/}
       <div className="row" id='companynamecontainer'>
        <div className="col-md-12">
          CompanyName
        </div>
       </div>

       {/**DropDown */}
       <div className="row" id='dropdowncontainer'>
        <div className="col-md-12">
        <i className="fa-solid fa-caret-down" id='dropdwonicon'></i>
        </div>
       </div>
      </form>
    </div>
</nav>
        
        
    );
}