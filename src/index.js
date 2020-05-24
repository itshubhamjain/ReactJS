//Import the React and ReactDOM Libraries
import React from 'react';
import ReactDOM from 'react-dom';


//Create a react components

const App = () => {
    const buttonText = {text:'Click Me'}
    const  style = {backgroundColor:'blue', color:"white"};
    return (
        <div>
        <label className="label" htmlFor="name">
        Enter name:
        </label>
        <input id="name" type="text"/>
        <button style={style}>
        {buttonText.text}
        </button>
        </div>
    );
};

// Take the react components and show it on screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);