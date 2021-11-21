import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import tableIcons from "../sherd/MaterialTableIcons"
import { useHistory } from 'react-router-dom';
import UserDetails from './UserDetails'

const Table1 = () => {

  const [users, setUsers] = useState([{}])
  const history = useHistory();


  useEffect(async () => {
    const response = await fetch('https://randomuser.me/api/?results=200&seed=noam')
    const dataJson = await response.json();
    const usersItems = dataJson.results;
    console.log(usersItems);
    setUsers(usersItems)
  }, []);


  const columns = [
    // { title: "picture", field: "picture.thumbnail", align: 'center', render: (rowData) => <img src={rowData.picture.large} style={{ width: 40, borderRadius: "50%" }} />, },
    { title: "picture", field: "picture.medium", align: 'center', render: (rowData) => <img src={rowData.picture} style={{ width: 40, borderRadius: "50%" }} />, },
    { title: "Name", field: "name.first", align: 'center' },
    { title: "email", field: "email", align: 'center' },
    { title: "gender", field: "gender", align: 'center' },
    { title: "Age", field: "dob.age", type: "numeric", align: 'left', align: 'center' },

  ];


  const userID = (event, rowData) => {
     history.push(`/UserDetails/${encodeURIComponent(rowData.login.username)}`);
 
  }
 return (
    <div>
      <h1>All Users </h1>
      
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