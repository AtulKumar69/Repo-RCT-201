import React from "react"
export const useList = (array:any) => {

    const[list,list2]=React.useState(array)

    const push=(x:number)=>{
        list.push(x)
        list2([...list])
    }
    const pop=()=>{
        list.pop()
        list2([...list])
    }

    const clear=()=>{
        list2([])
    }

    const reset=()=>{
        list2(array)
    }

    const map=(x:Function)=>{
        console.log(x)
       let mydata=list.map(x)
       list2(mydata)
    }


   let value1={push,pop,clear,reset,map}
    return[list,value1]
};