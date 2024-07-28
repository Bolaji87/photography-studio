import React, { useState } from "react";
import "./login.css";

function Login() {
  const [haveAccount, setHaveAccount] = useState(true);

  return (
    <>
      {haveAccount ? (
        <div className="login-page">
          <form action="" className="login-form">
            <input
              type="email"
              id="email-login"
              placeholder="input your email"
            />
            <input type="password" placeholder="*******" />
            <button>Login</button>
          </form>
        </div>
      ) : (
        <SignUp />
      )}
    </>
  );
}

function SignUp() {
  return (
    <div className="sign-up">
      <input type="text" placeholder="surName" />
      <input type="text" placeholder="lastName" />
      <input type="email" placeholder="email@.com" />
      <input type="password" placeholder="password" />
      <input type="password" placeholder="confirm password" />
    </div>
  );
}
export default Login;
