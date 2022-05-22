import React, { useEffect, useState } from "react";
import axios from "axios";

export const useFetch = (url: string) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [mydata, setMydata] = useState([]);

  useEffect(() => {
      setLoading(true);
    axios.get(url)
    .then((response) => {
        const {data} = response;
        setMydata(data)
    })
    .catch(()=>setError(true))
  }, []);


  return {loading, mydata, error}
};
