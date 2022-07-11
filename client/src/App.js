import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Landing from './components/Landing'
import Create from './components/Create'
import Detail from './components/Detail'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path= '/' element={<Landing/>} />
          <Route exact path= '/dogs' element={<Home/>} />
          <Route exact path= '/dogs/create' element={<Create/>} />
          <Route exact path= '/dogs/:id' element={<Detail/>} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
