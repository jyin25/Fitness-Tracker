import React from 'react';
import ReactDOM from 'react-dom';
import RegisterForm from '../Components/RegisterForm/RegisterForm'
import { BrowserRouter } from "react-router-dom";
 
it ('renders without crashing', () => {
  const div = document.createElement("div");
  
  ReactDOM.render(
    
    <BrowserRouter><RegisterForm ></RegisterForm></BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);

})