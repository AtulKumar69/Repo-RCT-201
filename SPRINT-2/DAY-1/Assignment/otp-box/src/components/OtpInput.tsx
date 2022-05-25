import { useRef, useState } from "react";
import "./Otp.css"
type OtpInputType ={
   totalInputs: number;
   onChange:(otp:string)=>void;
};


export const OtpInput =({totalInputs, onChange}:OtpInputType)=>{
    const inputRef= useRef<HTMLInputElement[]>([]);
    const[otp,setOtp]=useState<string>("")
    // const[color,setColor]=useState<string>("")
    return <>
    <div className="main">
        
        {new Array(totalInputs).fill(1).map((_,index) =>(
            <input 
            onChange ={(e)=>{
                setOtp(otp + e.target.value)
            }}
             onKeyUp={(e)=>{
                //ckeck if backspace is pressed
                //indexs out of bound
                 //if index<0 or index> inputRef.current.length returns 
                    if(e.code==="Backspace"){
                        inputRef.current[index-1].focus();
                        inputRef.current[index-1].select();
                    }else{
                        inputRef.current[index+1].focus();
                    }
                 onChange(otp)
             }}
            ref={(element)=>{
                if( inputRef.current && element){
                    inputRef.current[index]=element;
                }
                }} 
            //    onChange={()=>{
            //        if(index==OtpInput.length){
            //            setColor("green")
            //        }
            //    }}
            pattern={"[0-9]"} 
            type={"text"} 
            maxLength={1} 
            className="OtpInput" 
            key={index}/>
            
        ))}
        
        </div>
        </>
}

