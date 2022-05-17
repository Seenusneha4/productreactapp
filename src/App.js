import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Addproduct from './Components/Addproduct';
import Searchproduct from './Components/Searchproduct';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Viewproduct from './Components/Viewproduct';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" exact element={<Addproduct/>}/>
      <Route path="/search" exact element={<Searchproduct/>}/>
      <Route path="/view" exact element={<Viewproduct/>}/>

      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
