import React, { useState } from "react";
import Button from "../Buttons";
import TextField from "../TextField";

function Input() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState({});

  const submit = (e) => {
    e.preventDefault();
    let errorObj = {};
    if (!form.username.trim()) {
      errorObj.username = "Username khong duoc de trong";
    }

    if (!form.password) {
      errorObj.password = "Password khong duoc de trong";
    }
    setError(errorObj);

    if (Object.keys(errorObj).length === 0) {
      alert("thanh cong");
    }
  };

  // const onChange = (e) => {
  //   let name = e.currentTarget.name;
  //   let value = e.currentTarget.value;

  //   setForm({ ...form, [name]: value });
  // };

  const _onChange = (name) => (e) => {
    setForm({ ...form, [name]: e.currentTarget.value });
  };
  return (
    <div>
      <div className="container">
        <div className="form-wrapper">
          <h1>Login</h1>
          <form onSubmit={submit}>
            <TextField
              label="username"
              value={form.username}
              onChange={_onChange("username")}
              placeholder="Please enter your username"
              errorText={error.username}
            />
            <TextField
              label="password"
              value={form.password}
              onChange={_onChange("password")}
              placeholder="Please enter your username"
              errorText={error.password}
              type="password"
            />  
            <Button>Submit</Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Input;
