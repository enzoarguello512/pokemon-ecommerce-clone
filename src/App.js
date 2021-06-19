//import logo from './logo.svg';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
//import Navbar from './components/Navbar/Navbar';
//import ItemListContainer from './components/ItemListContainer/ItemListContainer';
//import ItemList from './components/ItemList/ItemList';
//import ItemDetail from './components/ItemDetail/ItemDetail';
//import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemCount from './components/Molecules/ItemCount/ItemCount';
import Item from './components/Molecules/Item/Item';

function App() {
  return <>
    <ItemCount stock={24} initial={4} />
    <Item item={{url: "asd", imgAlt: "asd", imgSrc: '/images/BWP_ES_BW01.png'}} />
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
