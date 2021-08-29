import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav'
import Home from './components/Home';
import Tweet from './components/Tweets';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Nav />
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/tweets" exact component={Tweet} />
        </Switch>

        <p>
          My First react app SMT
        </p>

      </header>
    </div>
    </Router>
  );
}

export default App;
