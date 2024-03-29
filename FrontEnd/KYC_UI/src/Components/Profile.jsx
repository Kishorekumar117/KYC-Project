import React from 'react'
import { useSelector } from 'react-redux'

function Profile() {

  const user = useSelector(state => state.user.value);
  const theme = useSelector(state => state.theme.value);
  const informationData = useSelector(state => state.information);

  const showdata = () => {
    alert('User ID:' + informationData.user_id +
      'User Name:' + informationData.user_Name +
      'Email:' + informationData.email +
      'Password:' + informationData.password +
      'Token:' + informationData.token +
      'Role ID:' + informationData.role_id);
  };

  if (!user.name) {
    return
  }
  return (
    <div style={{ 'color': theme }}>
      <h1> Profile</h1>
      <h2>name : {user.name}</h2>
      <h2>age : {user.age}</h2>
      <h2>Email : {user.email}</h2>
      <h2> {theme.color}</h2>

      {/* <button onClick={showdata}>showdata</button> */}


    </div>

  )
}

export default Profile