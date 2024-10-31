import classes from '@/components/Spinner.module.css'

export default function Spinner() {
  console.log('Render Spinner');
  return <div className={classes.loader}></div>
}