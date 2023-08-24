
import './App.css';
import dummy_data from './dummy_data.js';
//console.log(file[1].text)


function App() {

  return (
      <div className='App'>
        <header>
          <h1>Lucy </h1>
          <h2>~ Your smart dream journal ~</h2>
          <h3>Journal your dreams and explore your dreamscape. Lucy's smart analytics take care of the rest.</h3>
        </header>
        <nav className="nav">
          <ul>
            <li>Menu item 1</li>
            <li>Menu item 2</li>
            <li>Menu item 3</li>
          </ul>
        </nav>
        <form>
          <label>Title</label>
          <input type="text"></input>
          <label>Date</label>
          <input type="date"></input>
          <label>Text</label>
          <input type="text" placeholder="Describe your dream..."></input>
          <label>Rating</label>
          <input type="text"></input>
          <button type="submit">Submit</button>
        </form>
        <div className="dream_container">
          {dummy_data.map((dream, index) => (
            <div className="dream_entry" key={`${dream.title}-${index}`}>
              <p className="dream_title">{dream.title}</p>
              <p className="dream_date">{dream.date}</p>
              <p className="dream_text">{dream.text}</p>
              <p className="dream_rating">{dream.rating}</p>
              </div>
          ))}
        </div>
        <footer></footer>
      </div>
  );
}

export default App;
