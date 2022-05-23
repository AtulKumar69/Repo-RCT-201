import { memo, useCallback} from "react"
  export  const Verify = (props:any)=>{
   
    
     const {elem, setMemoup,memoup}= props
    
       const Atul = useCallback((elem:any)=>{
        elem.verifly=true
        console.log(elem)
        console.log(Atul,"fkdhsksg")
         setMemoup([...memoup])
       },[])

     
   
  
    return (
        <>
         <button onClick={()=>Atul(elem)}>Verify</button>
        </>
    )

  }

  export  const Datamemo = memo(Verify)