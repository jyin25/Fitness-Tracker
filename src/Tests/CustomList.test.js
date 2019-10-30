import React from 'react';
import ReactDOM from 'react-dom';
import CustomList from '../Components/Self/CustomList/CustomList'
import { BrowserRouter } from "react-router-dom";
 
it ('renders without crashing', () => {
  const div = document.createElement("div");
  
  ReactDOM.render(
    
    <BrowserRouter><CustomList ></CustomList></BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);

})