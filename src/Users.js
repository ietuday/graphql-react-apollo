import React from 'react'
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import "./style.css";

const GET_USERS = gql`
 
query users{
  userList(token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6InRhcGFubmF0aHZhbmlAcmFwaWRlcmEuY29tIiwiZXhwIjoxNjAwNDIxNzc0LCJvcmlnSWF0IjoxNjAwNDIxNDc0fQ.mSy9Zdq9e1pUJ2rbCrOC_RIi2jM52uZooAN_tpCr6Ck"){
    id
    username
    email
  }
}
`;

function Continents() {
  const data = useQuery(GET_USERS);
  if (!data) return <p>Loading...</p>;
  let items = [];
  if(data && data.data){
    const users = data.data.userList;
    users.map((user) => {
      items.push({
        "id": user.id,
        "email": user.email,
        "username": user.username
      })
    })
    console.log(items);
    
  }
  return (
    <div className="users">
        {items.map((item, index) => (
          <div key={index} >
            <h1>{item.id}</h1>
            <h2>{item.email}</h2>
            <h3>{item.username}</h3>
          </div>
        ))}
      </div>
  );
}

export default Continents;