import React from 'react';
import './App.css';
// import { Accordian } from './components/Accordian';
import { OtpInput } from './components/OtpInput';

function App() {
  const handleChange=(otp:string)=>{
    console.log("Received",otp)
  }
  return (
    <div className="App">
      {/* <Accordian/> */}
     <OtpInput totalInputs={5} onChange={handleChange} />
    </div>
  );
}

export default App;
