import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//COMPONENTS
import GameCards from './components/Pages/GameCards/GameCards';
import Home from './components/Pages/Home/Home';
import Pokedex from './components/Pages/Pokedex/Pokedex';
import GameCardId from './components/Pages/GameCardId/GameCardId';
import Cart from './components/Pages/Cart/Cart';
import Apps from './components/Pages/Apps/Apps';
import TvPokemon from './components/Pages/TvPokemon/TvPokemon';
import PlayPokemon from './components/Pages/PlayPokemon/PlayPokemon';
import CartOrder from './components/Pages/CartOrder/CartOrder';

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
          <Route path="/cart/:id" component={CartOrder} />
          <Route path="/apps" exact component={Apps} />
          <Route path="/tv-pokemon" exact component={TvPokemon} />
          <Route path="/play-pokemon" exact component={PlayPokemon} />
          <CategoryProvider>
            <Route path="/gamecards" exact component={GameCards} />
            <Route path="/gamecards/type-lightning" exact component={GameCards} />
            <Route path="/gamecards/type-lightning/:id" component={GameCardId} />
            <Route path="/gamecards/type-grass" exact component={GameCards} />
            <Route path="/gamecards/type-grass/:id" component={GameCardId} />
          </CategoryProvider>
        </Switch>
      </Router>
    </CartProvider>
  </>
}

export default App;
