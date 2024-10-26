import { useState } from "react";
import SmartInput from "../SmartInput/SmartInput";
import CardFilm from "../CardFilm/CardFilm";

export default function SearchFilms() {
  const
    [users,setUsers] = useState([]);
  
  return (
    <div className="container">
      <SmartInput setU={users => users && users.Search && setUsers(users.Search)}/>
      <div className="wrapper">
        {users.map(user => <CardFilm key={user.Title} user={user} />)}
      </div>
    </div>
  )
}