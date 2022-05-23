 import { useEffect, useState } from 'react'
import axios from "axios";
import './App.css'
//import { useTimeout } from './hooks/useTimeout';
const URL="https://api.github.com/search/users?q=Sparker&per_page=5";

type User={
id:number;
login:string;
avatar_url:string;

};
  function App() {
  const[text,setText]=useState("");
  const[loading,setLoading]=useState(false);
  const[err,setError]=useState(false);
  const [data,setData]=useState<User[]>([]);
  return loading ?
  <div>Loading ...</div>:err ?(
  <div>Something went wrong</div>
  )
  :
//   const toShow=useTimeout(2000);
// if(!toShow){
//  return <div>waiting for timer</div>;
// //"Waiting for timer";
 
// }
   (
    <div className="App">
     {/* <h1 style={{color:"teal",fontSize:"50px",width:"20%",margin:"auto",background:"pink",marginTop:"20px"}}>Hello </h1> */}
    <input type="text" 
    value={text}
    onChange={e=>setText(e.target.value)}/>
    <button onClick={()=>{
      setLoading(true);
axios.get(URL,{
  params:{
    per_page:5,
    q:text
  }
  
}).then(({data})=>{
  setLoading(false);
  setData(data.items)

})
    }}>
      Search
    </button>
    {data.map(user=>(
    <div key={user.id}>
      {user.login}{""}
    <div>
      <img width={500}height={220} src={user.avatar_url} alt="" />
    </div>
    </div>
    
    )
    )}
    </div>
  );
}

export default App
