import React, { useState } from "react"
import {useMergeState} from "../hooks/useMergeState"


type formType = {
    name:string,
    email:string,
    password:string
}

export const Form = () => {
const initState = [{name: "moni",email: "email",password: "apb",}]
const {handleChange,formdata} = useMergeState(initState) 
const [state , setState] = useState<formType[]>([])

console.log(initState,"initialstate")
    // const handleChange = (e:any) => {
    //     var input = e.target.name

    //     // setFormdata({...formdata,
    //     // [input]:e.target.value})

    //     var give = e.target.value
     
    // }
 
    // console.log(formdata,"the form data")
    // console.log(formdata,"form")

 
    const handleSubmit = (e:any) => {
        e.preventDefault()
        setState(formdata)
    }
    console.log(state,"state")    
    let data:any = state
    console.log(data,"data")
       
    return (
        <>
        <form onSubmit={handleSubmit}>
            <input name="name" type="text" placeholder="name" onChange={handleChange}/>
            <input name="email" type="text" placeholder="email" onChange={handleChange}/>
            <input name="password" type="password" placeholder="password" onChange={handleChange}/>
            <input type="submit"/>
        </form>
            <h1>{data.name}</h1>
            <h1>{data.email}</h1>
            <h1>{data.password}</h1>
        </>
    )
}