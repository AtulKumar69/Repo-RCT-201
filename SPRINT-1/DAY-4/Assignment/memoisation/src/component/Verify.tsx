import { memo, useCallback} from "react"
  export  const Verify = (props:any)=>{
   
    
     const {el, setMemoup,memoup}= props
    
       const Atul = useCallback((el:any)=>{
        el.verify=true
        console.log(el)
        console.log(Atul,"fkdhsksg")
         setMemoup([...memoup])
       },[])

     
   
  
    return (
        <>
         <button onClick={()=>Atul(el)}>Verify</button>
        </>
    )

  }

  export  const Datamemo = memo(Verify)