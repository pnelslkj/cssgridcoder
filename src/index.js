import React from 'react';
import { render } from 'react-dom';
import "./app.css";

const App = () => (
  <div className="wrapper">
    <div className="one subgrid">
      <div className="one-one">1</div>
      <div className="one-two">2</div>
      <div className="one-three">3</div>
      <div className="one-four">4</div>
    </div>
    <div className="two">Two</div>
    <div className="three">Three</div>
    <div className="four">Four</div>
  </div>
);

render(<App />, document.getElementById('root'));
