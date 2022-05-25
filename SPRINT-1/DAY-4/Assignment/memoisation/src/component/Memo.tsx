// import { keyboard } from "@testing-library/user-event/dist/keyboard";
import { memo, useState } from "react"
// import { resourceLimits } from "worker_threads";
import { Datamemo } from "./Verify";
type Frome = {
    id:number|null;
    title:string;
    body:string;
    verifly:boolean
}
const defaultUser:Frome = {
    id:null,
    title:"",
    body:"",
    verifly:false
}


export const Todo = ()=>{
    const [memosation , setMemosation] = useState(defaultUser)
    const [memoup , setMemoup]=useState<any>([])
    console.log("Atul memo")

    const handleChange =(prop: keyof Frome,value:any)=>{
        setMemosation({...memosation,[prop]:value})
        // setMemosation({...memosation,id:Math.random()})
  
      }
      const handleSubmit =  async(e:any)=>{
        e.preventDefault() 
        memosation.id=Math.random()
        console.log(memosation)
         memoup.push(memosation)
         setMemoup([...memoup])
    }
  
    

    
  
    return (
        <>
         <div>
         <form  onSubmit={handleSubmit}>
             <div>
             <label>Title </label>
             <input placeholder="title" type="text" value={memosation.title} onChange={(e)=>{handleChange("title",e.target.value)}}/>
             </div>
             <div>
                 <label>Body</label>
             {/* <input placeholder="body" type="teaxarea" value={memosation.body} onChange={(e)=>{handleChange("body",e.target.value)}}/> */}
             <textarea placeholder="body" value={memosation.body} onChange={(e)=>{handleChange("body",e.target.value)}}/>
             </div>
             <input  type="submit" placeholder="submit" onSubmit={handleSubmit}/>
         </form>
         </div>
         <div  style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gridTemplateRows:"auto",marginLeft:"-200px",width:"100%",gap:"20px"}}>
             {memoup.map((el:any)=>{
                return (
                    <>
                    <div  key ={el.id} style={{boxShadow:" rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px"}}> 
                    <div style={{display:"flex"}}>
                       {el.verifly ? <div style={{marginLeft:"20px",marginRight:"12px",width:"50px", height:"50px",backgroundColor:"red"}}></div>:""}
                        <div><h3>
                        {el.title}
                            </h3>
                                <h4>{el.body}</h4>
                                 <Datamemo key={Math.random()} el={el} setMemoup={setMemoup} memoup={memoup} /> 
                                
                                </div>
                    

                    </div>
                    </div>
                    
                    </>
                )
             })}
         </div>
        </>
    )
}


export const Memo=memo(Todo)
