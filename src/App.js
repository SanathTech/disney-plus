import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from "./components/Login";
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Detail';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="App">
      <Router basename="/disney-plus">
        <ScrollToTop />
        <Header />
        <Switch>
          <Route exact path='/'>
            <Login />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/movies/:title/:id'>
            <Detail />
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