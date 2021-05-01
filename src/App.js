import './App.css';
import myImage from './assets/me.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hi This is Shivanand !</h1>
        <div>
          <a href="https://www.facebook.com/shivanand.satla.71">
            <img src={myImage} width='100' height='100' className="my-image"/>
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
