import React from 'react';
import ReactDOM from 'react-dom';
import Logout from '../Components/Routes/Logout/Logout'
import { BrowserRouter } from "react-router-dom";
 
it ('renders without crashing', () => {
  const div = document.createElement("div");
  
  ReactDOM.render(
    
    <BrowserRouter><Logout ></Logout></BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);

})