import React, { useState } from "react";

function AppLoginInput({ labelText, password, placeholder, onCLick }) {

    const [hide, setHide] = useState(false);
        const handleChange= () =>{
            setHide(!hide);
        }

  return (
    <div style={{ width: "100%", margin: "5px" }}>
      <p class="login-input-label">{labelText}</p>
      {!password && (
        <input
          type="text"
          placeholder={placeholder}
          className="login-input-field"
        />
      )}

      {password && (
        <div classname="password-input-field">
          <input
            type="text"
            placeholder={placeholder}
            className="login-input-field"
          />
          { hide && <span 
          onClick={handleChange}
          class="material-symbols-rounded visibility-icon">
            visibility
          </span>}
          {!hide && <span 
          onClick={handleChange}
          class="material-symbols-rounded visibility-icon">
            visibility_off
          </span>}
        </div>
      )}
    </div>
  );
}

export default AppLoginInput;
