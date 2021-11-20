import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import tableIcons from "../sherd/MaterialTableIcons"
import { useHistory } from 'react-router-dom';
import UserDetails from './UserDetails'

const Table1 = () => {

  const [users, setUsers] = useState([{}])

  useEffect(async () => {
    const response = await fetch('https://randomuser.me/api/?results=200&seed=noam')
    const dataJson = await response.json();
    const usersItems = dataJson.results;
    console.log(usersItems);
    setUsers(usersItems)
  }, []);

  const columns = [
    { title: "picture", field: "picture.thumbnail", align: 'center', render: (rowData) => <img src={rowData.picture} style={{ width: 40, borderRadius: "50%" }} />, },
    { title: "Name", field: "name.first", align: 'center' },
    { title: "email", field: "email", align: 'center' },
    { title: "gender", field: "gender", align: 'center' },
    { title: "Age", field: "dob.age", type: "numeric", align: 'left', align: 'center' },

  ];
  const history = useHistory();

  const userID = (e, rd) => {

     console.log(rd);
    // const valueOfUser = e.target.value;
    // console.log(valueOfUser);
    // <UserDetails users={users} />

    // console.log(e);
     history.push(`/UserDetails/${encodeURIComponent(rd.login.username)}`);
    //  history.push({
    //   pathname: '/UserDetails',
    //   state: 'rd',
    // });
      //   // search: '?query=usersItems', 
      //   // state : { detail:users}

      // });
      // const data = {foo:1, bar:2};

      // fetch(`/UserDetails/${encodeURIComponent()}}`, {
      //   method: "GET",
      //   headers: headers,   
      // })
  }



  return (
    <div>
      <MaterialTable
        title="Table"
        icons={tableIcons}
        columns={columns}
        data={users}
        onRowClick={(event, rowData) => userID(event, rowData)}
        options={{ pageSizeOptions: [10, 20, 30, 40] }}
      />
    </div>

  )
};
export default Table1