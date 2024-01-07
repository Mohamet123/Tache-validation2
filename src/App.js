import logo from './logo.svg';
import './App.css';
import {MyNavbar} from "./Components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banners } from './Components/Banner';
import { Corp1 } from './Components/Corps1';
import { Corp2 } from './Components/Corps2';
import Carrousel from "./Components/Corps3";
import {Corps4, Corsp4} from "./Components/Corps4";
import { Footer } from './Components/Footer';
import { Pied } from './Components/pied';


function App() {
  return (
    <div className="App">
      <MyNavbar/>
      <Banners/>
      <Corp1/>
      <Corp2/>
      <Carrousel/>
      <Corps4/>
      <Footer/>

      <Pied/>
    </div>
      
  );
}

export default App;
