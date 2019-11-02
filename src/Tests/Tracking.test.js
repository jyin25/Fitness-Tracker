import React from 'react';
import ReactDOM from 'react-dom';
import Tracking from '../Components/Tracking/Tracking'
import { BrowserRouter } from "react-router-dom";

 
it ('renders without crashing', () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter><Tracking></Tracking></BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);

})