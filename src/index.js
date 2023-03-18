import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Draggable from 'react-draggable';


const handleDragStart = (e) => {
  e.preventDefault();
};

ReactDOM.render(
  <Draggable handle=".header" onStart={handleDragStart}>
    <div className="calculator">
      <App />
    </div>
  </Draggable>,
  document.getElementById('root')
);
