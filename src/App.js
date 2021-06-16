//import logo from './logo.svg';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from "./components/ItemCount/ItemCount";
import Item from "./components/Item/Item";
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return <>
    <Navbar />

    <ItemListContainer>
      <Item />
    </ItemListContainer>

  </>
}

export default App;
