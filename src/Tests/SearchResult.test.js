import React from 'react';
import ReactDOM from 'react-dom';
import SearchResult from '../Components/SearchResult/SearchResult'
import { BrowserRouter } from "react-router-dom";
 
it ('renders without crashing', () => {
  const div = document.createElement("div");
  
  ReactDOM.render(
    
    <BrowserRouter><SearchResult ></SearchResult></BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);

})