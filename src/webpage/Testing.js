import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const Testing = () => {
  const [signIn, setSignIn] = useState({
    username: "",
    age: "",
    password: "",
  });

  const { username, age, password } = signIn;

  const handleInput = (event) => {
    setSignIn({
      ...signIn,
      [event.target.name]: event.target.value,
    });
  };

  const SubmitForm = (event) => {
    event.preventDefault();
    console.log(username);
    console.log(age);
    console.log(password);
  };
  return (
    <div>
      <Form onSubmit={SubmitForm}>
        <Form.Control
          type="text"
          placeholder="Username"
          value={username}
          name="username"
          onChange={handleInput}
        />

        <Form.Control
          type="text"
          placeholder="age"
          value={age}
          name="age"
          onChange={handleInput}
        />

        <Form.Control
          type="text"
          placeholder="age"
          value={password}
          name="password"
          onChange={handleInput}
        />

        <Button variant="primary" type="submit">
          Create account
        </Button>
      </Form>
    </div>
  );
};

export default Testing;
