import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//COMPONENTS
import GameCards from './components/Pages/GameCards/GameCards';
import Home from './components/Pages/Home/Home';
import Pokedex from './components/Pages/Pokedex/Pokedex';
import GameCardId from './components/Pages/GameCardId/GameCardId';
import Cart from './components/Pages/Cart/Cart';

//CONTEXTS
import CategoryProvider from './components/Contexts/GameCards/GameCards';
import CartProvider from './components/Contexts/CartContext/CartContext';


function App() {
  return <>
    <CartProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/pokedex" exact component={Pokedex} />
          <Route path="/cart" exact component={Cart} />
          <CategoryProvider>
            <Route path="/gamecards" exact component={GameCards} />
            <Route path="/gamecards/type-lightning" exact component={GameCards} />
            <Route path="/gamecards/type-lightning/:id" exact component={GameCardId} />
            <Route path="/gamecards/type-grass" exact component={GameCards} />
            <Route path="/gamecards/type-grass/:id" component={GameCardId} />
          </CategoryProvider>
        </Switch>
      </Router>
    </CartProvider>
  </>
}

export default App;
