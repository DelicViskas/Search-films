import { useEffect, useState } from "react";
import ErrorInfo from "../ErrorInfo";
import Spinner from "../Spinner";

export function Fetcher({ url, onLoad, children }) {
  const
    [data, setData] = useState(null),
    [error, setError] = useState(null);
  useEffect(() => {
    setData(null);
    onLoad(null)
    setError(null);
    async function go() {
      try {
        const
          response = await fetch(url),
          res = await response.json();
        if (!response.ok) throw new Error(response.status + response.statusText);
        onLoad(res);
        setData(true);
      } catch (error) {
        setError(error);
      }
    };
    go();
  }, [url])

  if (error) return <ErrorInfo error={error} />
  if (!data) return <Spinner />
  return <>{children}</>
}

