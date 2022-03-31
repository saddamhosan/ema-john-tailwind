import { Route, Routes } from 'react-router-dom';
import Header from './Component/Header/Header';
import Order from './Component/Order/Order';
import Shop from './Component/Shop/Shop';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/order' element={<Order/>}/>
      </Routes>
    </div>
  );
}

export default App;
