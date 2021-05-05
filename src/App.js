//Components
import Header from './components/Header'
import Album from './components/Album'

//Styles
import './App.css';
import './components/styles/Header.css'
import './components/styles/Buttons.css';
import './components/styles/Nav.css';
import './components/styles/Album.css';


function App() {
  return (
    <div className="App">
      <Header>
      </Header>
      <Album albumName="AM" artist="Artic Monkeys" imgSrc="https://upload.wikimedia.org/wikipedia/commons/e/e7/%22AM%22_%28Arctic_Monkeys%29.jpg">
      </Album>
      <Album>
      </Album>
      <Album>
      </Album>
    </div>
  );
}

export default App;
