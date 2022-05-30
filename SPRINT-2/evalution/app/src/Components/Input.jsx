/* eslint-disable jsx-a11y/alt-text */

import '../App.css'

export const Input = ({
  type,
  size,
  variant,
  rightLogo,
  rightLogoOnClick,
  onChange,
}) => {
  return (
    <div className="inputContainer">
      {/* Add Right Logo */}
      <input type={type} className={`input`}   onChange={onChange}/>
      <img style={{marginLeft:"-40px"}} src={rightLogo} variant={"outline"} size={size} onClick={rightLogoOnClick}/>
    </div>
  );
};