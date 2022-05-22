import { useState } from "react"


type formType = {
    name:string,
    email:string,
    password:string
}

export const useMergeState = (initStat:formType[]) => {
    const [formdata, setFormdata] = useState(initStat)
    // const [getform, setGetform ] = useState([])
 

    const handleChange = (e:any) => {
        var input = e.target.name

        setFormdata({...formdata,
        [input]:e.target.value})
      
    }

    // console.log(formdata,"in merget")


    // const handleSubmit = (e:any) => {

    //     e.preventDefault()
    //     // setGetform(formdata)
    
    //     // console.log("clicked",getform)  
    // }

    return {handleChange,formdata}
}