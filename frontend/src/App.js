import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [Todos, setTodos] = useState();

  useEffect(() => {
    fetch('http://localhost:3000/api/todos')
      .then(res => res.json())
      .then(data => setTodos(data));
  }, []);

  return (
    <div className="App">

      {Todos.map((id, todos) => (
        <ul>
          <li key={id}>{todos}</li>
        </ul>
      ))}

    </div>
  );
}

export default App;
