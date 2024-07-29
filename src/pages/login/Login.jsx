import React, { useState } from "react";
import "./login.css";

function Login() {
  const [haveAccount, setHaveAccount] = useState(true);

  function handleHaveAccount() {
    setHaveAccount(false);
  }
  function handleDontHaveAccount() {
    setHaveAccount(true);
  }
  return (
    <div className="login-page-cont">
      {haveAccount ? (
        <LoginPage onHaveAccount={handleHaveAccount} />
      ) : (
        <SignUpPage onDontHaveAccount={handleDontHaveAccount} />
      )}
    </div>
  );
}

function LoginPage({ onHaveAccount }) {
  return (
    <form action="" className="login-form">
      <input type="email" id="email-login" placeholder="input your email" />
      <input type="password" placeholder="*******" />
      <span className="forgot-password">
        <a href="#">forgot password?</a>
      </span>
      <button>Login</button>

      <p className="dont-have-acct">
        Don't have an account?{" "}
        <a href="#" role="button" onClick={onHaveAccount}>
          {" "}
          Sign Up
        </a>
      </p>
    </form>
  );
}
function SignUpPage({ onDontHaveAccount }) {
  return (
    <div className="sign-up-form">
      <form>
        <span htmlFor="surname">Surname</span>
        <input id="surname" type="text" placeholder="surname" />
        <span htmlFor="lastname">Lastname</span>
        <input id="lastname" type="text" placeholder="lastname" />
        <span htmlFor="email">Email</span>
        <input id="email" type="email" placeholder="email@.com" />
        <span htmlFor="password">Password</span>
        <input id="password" type="password" placeholder="password" />
        <span htmlFor="confirm">Confirm Password</span>
        <input id="confirm" type="password" placeholder="confirm password" />
      </form>
      <button>Sign Up</button>
      <span className="already-have-acct">
        Already have an account?{" "}
        <a href="#" role="button" onClick={onDontHaveAccount}>
          Login
        </a>
      </span>
    </div>
  );
}

export default Login;
