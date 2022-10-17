import '../Dashboardcss/Dashboard.css';

export function Navbar()
{
    return(

        <nav className="navbar navbar-expand-lg navbar-light bg-white">
  <div className="container-fluid" id="navcontent">
            
{/*Logo Section*/}
<div className="row" id='logo'>
    <div className="col-md-12">
  <img src="/public/assets/images/Union.png" alt="" />
  <img src="/public/assets/images/lendsqr.png" alt="" />
    </div>
  </div>

  
  <div className="input-group mb-3">
  <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></input>
  <span className="input-group-text" id="basic-addon1"><i className="fa-solid fa-magnifying-glass"></i></span>
</div>

    
    

      <form className="d-flex rightcontent">

        {/**Docs*/}
       <div className="row">
        <div className="col-md-12">
           <a href="#">Docs</a>
        </div>
       </div>
        
        {/**Notification Bell */}
       <div className="row">
        <div className="col-md-12">
        <i className="fa-regular fa-bell"></i>
        </div>
       </div>

       {/**Profile Picture*/}
       <div className="row">
        <div className="col-md-12">
         
        </div>
       </div>

       {/**Company Name*/}
       <div className="row">
        <div className="col-md-12">
          Company Name
        </div>
       </div>

       {/**DropDown */}
       <div className="row">
        <div className="col-md-12">
        <i className="fa-solid fa-caret-down"></i>
        </div>
       </div>
      </form>
    </div>
</nav>
        
        
    );
}