import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ItemListContainer from './components/Organisms/ItemListContainer/ItemListContainer';
import Navbar from './components/Organisms/Navbar/Navbar';

function App() {
  return <>
    <Navbar />
    <ItemListContainer />
  </>
}

//<Item item={{url: "asd", imgAlt: "asd", imgSrc: '/images/BWP_ES_BW01.png'}} />
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
