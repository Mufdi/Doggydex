// import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Landing from './components/Landing/Landing'
import Create from './components/Create/Create'
import Detail from './components/Detail/Detail'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path= '/' component={Landing} />
          <Route exact path= '/dogs' component={Home} />
          <Route exact path= '/dogs/create' component={Create} />
          <Route path= '/dogs/:id' component={Detail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
