import React from "react";

function Form() {
  return (
    <>
      <div className="main">
        <p className="sign" align="center">
          Sign In
        </p>
        <form className="form1">
            <input type="text" className="un" align="center" placeholder="Username"/>
            <input type="password" className="pass" align="center" placeholder="Password"/>
            <a href="#" className="submit" align="center">Sign in</a>
            <p className="forgot" align="center">
                <a href="#">Forgot Password</a>
            </p>
        </form>
      </div>
    </>
  );
}

export default Form;
