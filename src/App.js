import './App.css';
import Banner from './componentes/Banner/Banner';
import { Routes, Route, Link } from "react-router-dom";
import Event from './componentes/Banner/Event/Event';

function App() {
  return (
    <div className="App">
      {/* <Banner /> */}
      <Routes>
        <Route path='/' element={<Banner />} />
        <Route path='/event' element={<Event />} />
      </Routes>
    </div>
  );
}

export default App;
