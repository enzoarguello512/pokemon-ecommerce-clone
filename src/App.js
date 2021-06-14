//import logo from './logo.svg';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from "./components/ItemCount/ItemCount";
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return <>
    <Navbar />

    <ItemListContainer>
      <ItemCount stock={25} initial={1} />
    </ItemListContainer>

  </>
}

export default App;
