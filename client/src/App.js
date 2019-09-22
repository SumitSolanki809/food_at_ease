import React from 'react';
import OrderPage from './pages/OrderPage'
import Login from './components/login/Login'
import './App.css';

function App() {
  return (
    <div className="App">
      <Login />
      <OrderPage />
    </div>
  );
}

export default App;
