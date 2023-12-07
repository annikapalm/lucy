
import './App.css';
import dummy_data from './shared/dummy_data.js';
// import React, { useState } from 'react';
import { FiHeart } from 'react-icons/fi';


const FormButton = () => {
  return (
    <button>
      <FiHeart/>
    </button>
  );
};

function App() {

  const submitClick = () => {
    console.log("success");
  };


  return (
      <div className='App'>

        <nav className="sidebar">
            <a className="active" href="#">Home</a>
              <a href="#">Analytics</a>
              <a href="#">Archive</a>
              <a href="#">About</a>           
          </nav>

        <header>
          <h1>Lucy </h1>
          <h2>~ Your smart dream journal ~</h2>
          <h3>Journal your dreams and explore your dreamscape. Lucy's smart analytics take care of the rest.</h3>
        </header>


        <div className='container'>
        <form onClick={submitClick}>
          <label>Title</label>
          <input type="text" placeholder="Give your dream a title"></input>
          <label>Date</label>
          <input type="date"></input>
          <label className ="textInput">Text</label>
          <input type="text" placeholder="Describe your dream..."></input>
          <input list="labels" className="labels"></input>
          <datalist id="labels">
              <option value="Nightmare"/>
              <option value="Good dream"/>
              <option value="Special dream"/>
          </datalist>

          <FormButton></FormButton>

        </form>
        <div className="dream_container">
          {dummy_data.map((dream, index) => (
            <div className="dream_entry" key={`${dream.title}-${index}`}>
              <p className="dream_title">{dream.title}</p>
              <p className="dream_date">{dream.date}</p>
              <button type="button" className="collapsible">hide</button>
              <p className="dream_text">{dream.text}</p>
              <p className="dream_rating">{dream.rating}</p>
              </div>
          ))}
        </div>
        </div>
        <footer></footer>
      </div>
  );
}

export default App;
