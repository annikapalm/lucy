
import './App.css';
import file from "./dummy_data.json";
console.log(file[1].text)


function App() {

  return (
      <div className='App'>
        <header>
          <h2>Lucy </h2>
          <h3>~ Your smart dream journal ~</h3>
          <p>Journal your dreams and explore your dreamscape. Lucy's smart analytics take care of the rest.</p>
        </header>
        <nav class="nav">
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
        <div class="dream_container"></div>
        <footer></footer>
      </div>
  );
}

export default App;
