import React from 'react';
import Form from './components/Form'
import List from './components/List';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Router>

        <Switch>

          <Route path='/list'>

            <div className="container">
              <List />
            </div>
          </Route>
          <Route path='/'>
            <h1 className="title">Cree su perfil</h1>
            <div className="container">
              <Form />
            </div>
          </Route>


        </Switch>

      </Router>
    </div>

  );
}

export default App;
