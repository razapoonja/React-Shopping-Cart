import React from 'react';
import Cart from './components/Cart';
import './App.css';

const items = [
  { id: 1, name: 'Item One', price: 3.21, qty: 1},
  { id: 2, name: 'Item Two', price: 1.44, qty: 3},
  { id: 3, name: 'Item Three', price: 7.12, qty: 5}
]

function App() {
  return (
    <div>
      <Cart initialItems={items} />
    </div>
  );
}

export default App;
