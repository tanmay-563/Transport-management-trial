import './App.css';
import { Routes, Route } from 'react-router-dom';

import List from './component/listpage/list';
import Lorry from './component/Screens/Lorry';
import Truck from './component/Screens/Truck';
import Van from './component/Screens/Van';
import UpdateLorry from './component/Screens/Update/Update';
import NavBar from './component/navbar/navbar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/lorry" element={<Lorry />} />
        <Route path="/lorryupdate/:id" element={<UpdateLorry />} />
        <Route path="/truck" element={<Truck />} />
        <Route path="/van" element={<Van />} />
      </Routes>
    </div>
  );
}

export default App;
