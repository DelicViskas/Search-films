import { useEffect, useState } from "react";
import classes from '@/components/SmartInput/SmartInput.module.css'

export default function SmartInput({setU}) {
  const
    [value, setValue] = useState(''),
    [users, setUsers] = useState(null),
    [error, setError] = useState(null);

  useEffect(()=> {
    async function fetchUser() {
      try {
        const
          res = await fetch(`https://www.omdbapi.com/?apikey=a2b07930&s=${value}`);
        if (!res.ok) throw (new Error(res.status));
        const
          u = await res.json();
        setUsers(u);
      } catch (err) {
        setError(err);
      }
    };
    fetchUser();
  }, [value]);

  if(users) {
    setU(users);
    return (
        <input className={classes.search} type="text" value={value} onChange={event=> setValue(event.target.value)}/> 
    );
  }
  if(error) {
    return (
    <>
      <input className={classes.search} type="text" value={value} onChange={event=> setValue(event.target.value)}/> 
      <div className={classes.error}>
        <h2>Ошибка загрузки данных...</h2>
      </div>
    </>);
}
}