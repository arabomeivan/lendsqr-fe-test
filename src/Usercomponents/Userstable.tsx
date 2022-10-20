export function Userstable(props: any)
{
  console.log(props.fetchedUsers)
    return(

        <table className="table table-responsive">
  <thead>
    <tr>
      <th scope="col">S/N</th>
      <th scope="col">Organization<i className="fa-solid fa-list"></i></th>
      <th scope="col">Username<i className="fa-solid fa-list"></i></th>
      <th scope="col">Email<i className="fa-solid fa-list"></i></th>
      <th scope="col">Phone Number<i className="fa-solid fa-list"></i></th>
      <th scope="col">Date Joined<i className="fa-solid fa-list"></i></th>
      {/* <th scope="col">Status<i className="fa-solid fa-list"></i></th> */}
    </tr>
  </thead>
  <tbody>
    {
      props.fetchedUsers.map((user: any, index: number) => {
        return (
          <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>{user.orgName}</td>
            <td>{user.userName}</td>
            <td>{user.email}</td>
            <td>{user.phoneNumber}</td>
            <td>{user.createdAt}</td>
            {/* <td>@mdo</td> */}
          </tr>
        )
      })
    }
    
  </tbody>
</table>
    );
}