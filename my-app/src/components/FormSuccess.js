import React, { useEffect, useState } from "react";
import "./Form.css";
import useForm from "./useForm";


const FormSuccess = () => {
    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();

    const onSignIn = () => null;

    useEffect(()=>{
        console.log('useEffect');
        setUserName(localStorage.getItem("Username"));
        setPassword(localStorage.getItem("Password"));
    },[]);

   const handleSubmitLogin= (e)=>{
    e.preventDefault();
    setUserName('');
    setPassword('');
   }

  return (
    <div className="form-content-right">
      <h1 className="form-login">Login</h1>
      <form onSubmit={handleSubmitLogin} className="form">
        <div className="form-inputs">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input value={userName}></input>
        </div>
        <div className="form-inputs">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input value={password}></input>
        </div>
        <button className="form-input-btn" type="submit" >Sign in</button>
      </form>
    </div>
  );
};

export default FormSuccess;
