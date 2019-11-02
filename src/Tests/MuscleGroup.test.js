import React from 'react';
import ReactDOM from 'react-dom';
import MuscleGroup from '../Components/Self/MuscleGroup'
import { BrowserRouter } from "react-router-dom";

 
it ('renders without crashing', () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter><MuscleGroup></MuscleGroup></BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);

})