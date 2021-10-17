import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from "./components/Login";
import './App.css';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path='/disney-plus'>
            <Login />
          </Route>
          <Route path='/disney-plus/home'>
            <Home />
          </Route>
          <Route path='/*'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;