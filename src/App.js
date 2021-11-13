import "antd/dist/antd.css";
import "./App.css";
import { Typography, Switch } from "antd";
import { Divider } from "antd";
import React, { useState } from "react";
import { Form, Input, Button, Radio } from "antd";
import FormInput from "./Components/FormInput";


function App() {
  return (
    <div className="App">
      <h1>Todo App</h1>
      <Divider orientation="right"></Divider>
      <FormInput />
    </div>
  );
}

export default App;
