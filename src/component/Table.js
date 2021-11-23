import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import tableIcons from "../sherd/MaterialTableIcons"
import { useHistory } from 'react-router-dom';

const Table = () => {

  const [users, setUsers] = useState([])
  const history = useHistory();

  useEffect(async () => {
    const response = await fetch('https://randomuser.me/api/?results=200&seed=users')
    const dataJson = await response.json();
    const usersItems = dataJson.results;
    setUsers(usersItems)
  }, []);  
  
  const columns = [
    { title: "Picture", field: "picture.large", align: 'center',
     render: (rowData) => <img src={rowData.picture.large} style={{ width: 40, borderRadius: "50%" }} />, },
    { title: "Fname", field: "name.first", align: 'center' },
    { title: "lname", field: "name.last", align: 'center' },

    { title: "Email", field: "email", align: 'center' },
    { title: "Gender", field: "gender", align: 'center' },
    { title: "Age", field: "dob.age", type: "numeric", align: 'left', align: 'center' },

  ];  

  const userID = (event, rowData) => {
     history.push(`/UserDetails/${encodeURIComponent(rowData.login.username)}`);
 
  }
 return (
    <div className="table">
      <h1>All Users </h1>
      <MaterialTable
        title="Table"
        icons={tableIcons}
        columns={columns}
        data={users}
        onRowClick={(event, rowData) => userID(event, rowData)}
        options={{ 
        pageSizeOptions: [10, 20, 30, 40],
        pageSize:10,
        headerStyle: {
          backgroundColor: '#01579b',
          color: '#FFF'
        },
        rowStyle:{
          backgroundColor :'#EEE'
        },
        style:{
          

        }
      
      }}
      />
    </div>

  )
};
export default Table