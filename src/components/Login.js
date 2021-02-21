import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import axios from "axios";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const history = useHistory();
  const initialState = {
    username: '',
    password: ''
  }

  const [credentials, setCredentials] = useState(initialState)

  const changeHandler = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  };

  const loginHandler = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/login', credentials)
      .then((res) => {
        // console.log(res);
        localStorage.setItem('token', res.data.payload);
        history.push('/')
      })
      .catch((err) => {console.log(err)});
  };

  return (
    <>
      <h1>
        Welcome to the Bubble App!
        <Form onSubmit={loginHandler}>
          <FormGroup>
            <Label for="username">Username</Label>
            <Input name="username" placeholder='Luke' value={credentials.username} onChange={changeHandler}></Input>
          </FormGroup>

          <FormGroup>
            <Label for="password">Password</Label>
            <Input name="password" placeholder='password' value={credentials.password} onChange={changeHandler}></Input>
          </FormGroup>

          <Button>Submit</Button>
        </Form>
      </h1>
    </>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEXT "username" and "password" RESPECTIVELY.
//4. If either the username or password is not displaied display EXACTLY the following words: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.