import { useEffect, useState } from "react";
import { fetchData } from "./Utils";
const CACHE = {};
export default function useFetch(url, defaultValue = []) {
    const [data, setData] = useState(defaultValue);
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
      const cacheID = url;
      if (CACHE[cacheID] !== undefined) {
        setData(CACHE[cacheID]);
        setLoading(false);
      } else {
        setLoading(true);
        fetchData(url).then(newData => {
            CACHE[cacheID] = newData;
            setData(newData);
            setLoading(false);
          });
      }
    }, [url]);
  
    return [data, isLoading];
  }