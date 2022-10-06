import React, { useState } from "react";

export default function Form() {
  const [inputs, setInputs] = useState({});
  const [myCar, setMyCar] = useState();

  const HandleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
    setMyCar(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
    console.log(inputs);
  };
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [usererr, setUserErr] = useState(false);
  const [passworderr, setPasswordErr] = useState(false);

  function loginhandle(e) {
    if (user.length <= 3 || password.length <= 3) {
      alert("Type Correct Values");
    } else {
      alert("Good!");
    }

    e.preventDefault();
  }

  function userhandler(e) {
    let item = e.target.value;
    if (item.length <= 3) {
      setUserErr(true);
    } else {
      setUserErr(false);
    }
    setUser(item);
    console.log(item);
  }

  function passwordhandler(e) {
    let item = e.target.value;
    if (item.length <= 3) {
      setPasswordErr(true);
    } else {
      setPasswordErr(false);
    }
    setPassword(item);
    console.log(item);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name :
          <input
            type="text"
            name="username"
            value={inputs.username || ""}
            onChange={HandleChange}
          />
        </label>
        <br />
        <label>
          {" "}
          Age :
          <input
            type="number"
            name="age"
            value={inputs.age || ""}
            onChange={HandleChange}
          />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>

      <form onSubmit={loginhandle}>
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Enter User Name"
          onChange={userhandler}
        />{" "}
        {usererr ? <span>User Not Valid</span> : ""}
        <br />
        <br />
        <input
          type="password"
          placeholder="Enter User Password"
          onChange={passwordhandler}
        />{" "}
        {passworderr ? <span>Password Not Valid</span> : ""}
        <br />
        <br />
        <button type="submit">Login</button>
      </form>
    </>
  );
}
