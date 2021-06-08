//import logo from './logo.svg';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return <>
    <Navbar />
    <ItemListContainer greeting={'item-title'} />
    <ItemListContainer greeting={'item-title'} />
    <ItemListContainer greeting={'item-title'} />
  </>
}

export default App;
