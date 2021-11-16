import React from "react";

const SignUp = () => {
  return (
    <form>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Name"
        autocomplete="off"
        required
      />
      <input
        autocomplete="off"
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        required
      />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SignUp;
