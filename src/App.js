//import logo from './logo.svg';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemList from './components/ItemList/ItemList';
import ItemDetail from './components/ItemDetail/ItemDetail';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return <>
    <Navbar />

    <ItemListContainer>
      <ItemDetail name="Snivy" />
    </ItemListContainer>

  </>
}

//<ItemList url={'https://pokeapi.co/api/v2/pokemon?limit=100&offset=200'} />
export default App;
