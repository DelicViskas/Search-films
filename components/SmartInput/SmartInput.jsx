import { memo, useState } from "react";
import classes from '@/components/SmartInput/SmartInput.module.css'

export const SmartInput = memo(function SmartInput({ setVal }) {
  console.log('render Smart Input');

  const
    [value, setValue] = useState('');

  return <input className={classes.search} type="text" value={value} onChange={event => {
    setValue(event.target.value);
    if (event.target.value.trim())
      setVal(event.target.value);
  }} />
})