export default function ErrorInfo({ error }) {
  console.log('Render Error info');
  return <div className="error">{error.toString()}</div>
}