import useroptions from "../images/useroptions.png"
import filter from "../images/filter-results.png"

export function Userstable(props: any) {


//Props
 const loading = props.loading
 const tablevisibility = props.tablevisibility



      

  return(

    <>{ loading && <div className="spinner-border text-primary text-center" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>}
    
    { tablevisibility && <div className="col-sm-6 col-12 table-responsive">

   
        <table className="table">
          <thead>
            <tr>
              <th scope="col">
                Organization<img src={filter} className="img-fluid" alt="" id="filter" />
              </th>
              <th scope="col">
                Username<img src={filter} className="img-fluid" alt="" id="filter" />
              </th>
              <th scope="col">
                Email<img src={filter} className="img-fluid" alt="" id="filter" />
              </th>
              <th scope="col">
                Phone Number<img src={filter} className="img-fluid" alt="" id="filter" />
              </th>
              <th scope="col">
                Date Joined <img src={filter} className="img-fluid" alt="" id="filter"/>
              </th>
      

              <th scope="col">
                Status<img src={filter} className="img-fluid" alt="" id="filter" />
              </th>
              
              {/* <th scope="col">Status<i className="fa-solid fa-list"></i></th> */}
            </tr>
          </thead>
          <tbody>
            {props.fetchedUsers.map((user: any, index: number) => {
              return (
                <tr key={index}>
                  <td>{user.orgName}</td>
                  <td>{user.userName}</td>
                  <td>{user.email}</td>
                  <td>{user.profile.phoneNumber}</td>
                  <td>{user.createdAt}</td>
                  <td><div id="status">inactive</div> <img src={useroptions} className="img-fluid" alt="" /></td>
                  {/* <td>@mdo</td> */}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>}</>
    );
  
}
