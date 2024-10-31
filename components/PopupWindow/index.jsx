import classes from './index.module.css';

export function PopupWindow({ children }) {
  console.log('Render popup');
  return <div className={classes.popup}>
    {children}
  </div>
}