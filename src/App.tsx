import React from 'react';
import Form from './components/Form'
import List from './components/List';
import logo from './logo.svg';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <h1 className="title">Cree su perfil</h1>
      <div className="container">
        <List name={'Pedro Fernandez'} occupation={'Developer'}/>
      </div>

    </div>
  );
}

export default App;
