//import logo from './logo.svg';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
//import Navbar from './components/Navbar/Navbar';
//import ItemListContainer from './components/ItemListContainer/ItemListContainer';
//import ItemList from './components/ItemList/ItemList';
//import ItemDetail from './components/ItemDetail/ItemDetail';
//import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Button from './components/Atoms/Button/Button';
import ItemCount from './components/Molecules/ItemCount/ItemCount';

function App() {
  return <>
    <ItemCount stock={2} initial={24} />
  </>
}

//<Navbar />

//<ItemListContainer>

//<ItemDetailContainer>
//<ItemDetail name="Snivy" />
//</ItemDetailContainer>

//<Button />
//</ItemListContainer>



//<ItemList />

//<ItemList url={'https://pokeapi.co/api/v2/pokemon?limit=100&offset=200'} />
export default App;
