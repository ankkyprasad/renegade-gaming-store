import React from "react";

const SignIn = () => {
  return (
    <form>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        autocomplete="off"
        required
      />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        autocomplete="off"
        required
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default SignIn;
