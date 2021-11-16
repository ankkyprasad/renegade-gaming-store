import { useState } from "react";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

const Account = () => {
  const [haveAccount, setHaveAccount] = useState(true);
  const signInHandler = () => {
    setHaveAccount(true);
  };
  const signUpHandler = () => {
    setHaveAccount(false);
  };
  return (
    <main className="account">
      <section>
        <div className="form-container">
          <div className="select-account-option">
            <button
              onClick={signInHandler}
              className={haveAccount ? "active-button" : ""}
            >
              Sign In
            </button>
            <button
              onClick={signUpHandler}
              className={haveAccount ? "" : "active-button"}
            >
              Sign Up
            </button>
          </div>
          <div className="input-container">
            {haveAccount ? <SignIn /> : <SignUp />}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Account;
