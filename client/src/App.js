  import logo from './logo.svg';
import './App.css';
import {Router} from '@reach/router'
import Main from './views/Main'
import Update from './views/Update'
import Form
 from './components/Form';
function App() {
  return (
    <div className="App">
      <Router>
        <Main default path="/pirates"/>
        <Update path="/pirate/:id"/>
        <Form path="/pirate/new"/>
      </Router>
    </div>
  );
}

export default App;
