import React, { useState, useEffect } from 'react'
import tableIcons from "../sherd/MaterialTableIcons"
import { FaPhone, FaUserAlt } from 'react-icons/fa'
import { useParams } from 'react-router-dom';
import '../sherd/styles.css'

const UserDetails = () => {

  const { username } = useParams();
  const [users, setUsers] = useState([])

  function uppercase(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };



  useEffect(async () => {
    const response = await fetch('https://randomuser.me/api/?results=200&seed=users')
    const dataJson = await response.json();
    const usersItems = dataJson.results;
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
      user.login.username === username
    )[0];
  console.log(userData.location);
  return (
    <div className="container">

      <h1>User Details</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-4 animated fadeIn">

            <div className="card">
              <div className="card-body">
                <div className="avatar">
                  <img
                    src={userData.picture.large}
                    className="card-img-top"
                    alt=""
                  />
                </div>
                <h5 className="card-title">
                  {uppercase(userData.name.first) +
                    " " +
                    uppercase(userData.name.last)}
                </h5>
                <p className="card-text">
                  {userData.email}

                </p>
                <p className="card-text">
                  {userData.gender}

                </p>
                <p className="card-text">
                  {userData.dob.age}

                </p>
                <p className="card-text">
                  {userData.location.city +
                    ", " +
                    uppercase(userData.location.country)}
                  <br />
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>


  )
}

export default UserDetails
