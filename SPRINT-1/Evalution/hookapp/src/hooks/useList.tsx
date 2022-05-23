import React from "react"
export const useList = (array:any) => {

    const[list1,list2]=React.useState(array)

    const push=(x:number)=>{
        list1.push(x)
        list2([...list1])
    }
    const pop=()=>{
        list1.pop()
        list2([...list1])
    }

    const clear=()=>{
        list2([])
    }

    const reset=()=>{
        list2(array)
    }

    const map=(x:Function)=>{
        console.log(x)
       let mydata=list1.map(x)
       list2(mydata)
    }


   let value1={push,pop,clear,reset,map}
    return[list1,value1]
};