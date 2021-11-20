import React, { useState, useEffect } from 'react'
import tableIcons from "../sherd/MaterialTableIcons"
import Header from './Header'
import { useParams } from 'react-router-dom';

const UserDetails = () => {

  const { username } = useParams();
  const [users, setUsers] = useState([])

  useEffect(async () => {
    const response = await fetch('https://randomuser.me/api/?results=200&seed=noam')
    const dataJson = await response.json();
    const usersItems = dataJson.results;
    // console.log(typeof usersItems[0].gender);
    setUsers(usersItems)
  }, []);

  if (users.length == 0) {
    return (
      <>
        <div>Loading...</div>
      </>
    )
  }

  const userData = 
    users.filter(user =>
      user.login.username == username 
    )[0]

  // console.log(typeof userData)

  return (
    <>
      <h1>user</h1>
      <div><h1>Help. The name is {userData.login.username} </h1></div>
     </>
  )
}

export default UserDetails
