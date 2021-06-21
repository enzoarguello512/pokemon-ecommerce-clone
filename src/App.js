import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import GameCards from './components/Pages/GameCards/GameCards';
import Home from './components/Pages/Home/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';



function App() {
  return <>
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/gamecards/type-grass" component={GameCards} />
      </Switch>
    </Router>
  </>
}

export default App;
