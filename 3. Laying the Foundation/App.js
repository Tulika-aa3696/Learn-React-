import React from 'react';
import ReactDOM from 'react-dom';

// First Component
const First = React.createElement('h1', {}, "Hello world from React");
const root0 = ReactDOM.createRoot(document.getElementById("root0"));
root0.render(First);

// Second Component
const Title = () => (
  <div className="title">
    {First}  
    <h1>This is Component 01</h1>
  </div>
);
const root1 = ReactDOM.createRoot(document.getElementById("root1"));
root1.render(<Title />);

// Third Component
const Heading = () => (
  <div>
    <Title />
    <h2>This is component 02</h2>
  </div>
);
const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root2.render(<Heading />);
