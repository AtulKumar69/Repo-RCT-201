import axios from "axios";
import { useEffect, useState } from 'react';
export const useFetch=(url:string,params:Record<string,unknown>)=>{
     const[loading,setLoading]=useState(false);
  const[err,setError]=useState(false);
  const [data,setData]=useState([]);
useEffect(()=>{
    axios.get(url,{
params:{
    ...params
}
    }).then(()=>{
        setLoading(false);
        setData(data);
    }).catch(()=>{
        setLoading(false);
        setError(true)
    })
},[]);
return {loading,data,err};
};