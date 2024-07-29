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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handlesubmitLogin(e) {
    e.preventDefault();

    if (!email && !password) return;

    setEmail("");
    setPassword("");
  }

  return (
    <form onSubmit={handlesubmitLogin} action="" className="login-form">
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        id="email-login"
        placeholder="input your email"
      />
      <input
        value={password}
        onChange={(e) => setPassword(Number(e.target.value))}
        type="password"
        placeholder="*******"
      />
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
  const [surname, setSurname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleSubmitSignIn(e) {
    e.preventDefault();

    setSurname("");
    setLastname("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  }

  return (
    <div className="sign-up-form">
      <form onSubmit={handleSubmitSignIn}>
        <span htmlFor="surname">Surname</span>
        <input
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          id="surname"
          type="text"
          placeholder="surname"
        />
        <span htmlFor="lastname">Lastname</span>
        <input
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          id="lastname"
          type="text"
          placeholder="lastname"
        />
        <span htmlFor="email">Email</span>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          type="email"
          placeholder="email@.com"
        />
        <span htmlFor="password">Password</span>
        <input
          value={password}
          onChange={(e) => setPassword(Number(e.target.value))}
          id="password"
          type="password"
          placeholder="password"
        />
        <span htmlFor="confirm">Confirm Password</span>
        <input
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(Number(e.target.value))}
          id="confirm"
          type="password"
          placeholder="confirm password"
        />
      </form>
      <button onClick={handleSubmitSignIn}>Sign Up</button>
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
