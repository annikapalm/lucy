
import './App.css';
import dummy_data from './dummy_data.js';
//console.log(file[1].text)


function App() {

  return (
      <div className='App'>
        <header>
          <h2>Lucy </h2>
          <h3>~ Your smart dream journal ~</h3>
          <p>Journal your dreams and explore your dreamscape. Lucy's smart analytics take care of the rest.</p>
        </header>
        <nav className="nav">
          <ul>
            <li>Menu item 1</li>
            <li>Menu item 2</li>
            <li>Menu item 3</li>
          </ul>
        </nav>
        <form>
          <label>Label 1</label>
          <input type="text"></input>
          <label>Label 2</label>
          <input type="text"></input>
          <label>Label 3</label>
          <input type="text"></input>
          <button type="submit">Submit</button>
        </form>
        <div className="dream_container">
          {dummy_data.map((dream, index) => (
            <div className="dream" key={`${dream.title}-${index}`}><p>{dream.title}</p></div>
          ))}
        </div>
        <footer></footer>
      </div>
  );
}

export default App;
