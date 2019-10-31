import React from 'react';
import ReactDOM from 'react-dom';
import CustomProgress from '../Components/Progress/CustomProgress'
import { BrowserRouter } from "react-router-dom";
 
it ('renders without crashing', () => {
  const div = document.createElement("div");
  
  ReactDOM.render(
    
    <BrowserRouter><CustomProgress ></CustomProgress></BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);

})