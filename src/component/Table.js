import React, { useState, useEffect, Component } from "react";
import MaterialTable from "material-table";
import tableIcons from "../sherd/MaterialTableIcons"
import { Switch, Route, Link } from "react-router-dom";


const Table = () => {

  const [person, setPerson] = useState([{}])
  useEffect(async () => {
    const response = await fetch('https://randomuser.me/api/?results=200')
    const dataJson = await response.json();
    const personItems = dataJson.results;
    console.log(personItems);
    setPerson(personItems)
  }, []);

  const columns = [
     { title: "picture", field: "picture.thumbnail",align:'center', render: (rowData) => <img src={rowData.picture} style={{ width: 40, borderRadius: "50%" }} />,},
    { title: "Name", field: "name.first",align:'center' },
    { title: "email", field: "email" },
    { title: "gender", field: "gender" },
    { title: "Age", field: "dob.age", type: "numeric",align:'laft' },

  ];

  

  return (
    <div className="table" >
     <MaterialTable 
        title="Table"
        icons={tableIcons} 
        columns={columns} 
        data={person} 
        options={{pageSizeOptions:[10,20,30,40]} }
    />
    </div>

  )
};
export default Table