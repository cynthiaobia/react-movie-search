import MovieDisplay from './components/MovieDisplay';
import Form from "./components/Form";

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Movie Search</h1>
      <Form />
      <MovieDisplay />
    </div>
  );
}

export default App;
