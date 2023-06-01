import "./App.scss";

function App() {
  return (
    <div class="wrapper">
      <div class="content">
        <h4 class="title">React-todos`</h4>
        <div class="search-box">
          <input type="text" />
          <button class="btn">Add</button>
        </div>
        <ul>
          <li>
            <input type="checkbox" />
            <p>Clean bedroom</p>
            <img src="./draw.png" alt="pencil-icon" />
            <img src="./trash-can.png" alt="trashbin-icon" />
          </li>
          <li>
            <input type="checkbox" />
            <p>Clean bedroom</p>
            <img src="./draw.png" alt="pencil-icon" />
            <img src="./trash-can.png" alt="trashbin-icon" />
          </li>
          <li>
            <input type="checkbox" />
            <p>Clean bedroom</p>
            <img src="./draw.png" alt="pencil-icon" />
            <img src="./trash-can.png" alt="trashbin-icon" />
          </li>
          <li>
            <input type="checkbox" />
            <p>Clean bedroom</p>
            <img src="./draw.png" alt="pencil-icon" />
            <img src="./trash-can.png" alt="trashbin-icon" />
          </li>
          <li>
            <input type="checkbox" />
            <p>Clean bedroom</p>
            <img src="./draw.png" alt="pencil-icon" />
            <img src="./trash-can.png" alt="trashbin-icon" />
          </li>
          <li>
            <input type="checkbox" />
            <p>Clean bedroom</p>
            <img src="./draw.png" alt="pencil-icon" />
            <img src="./trash-can.png" alt="trashbin-icon" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
