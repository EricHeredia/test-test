import React from 'react';
import Header from './components/Header'
import ProductContainer from './containers/ProductContainer'
import Toolbar from './components/Toolbar'
import './App.scss'

function App() {
 
  return (
    <div className="App">
      <Header />
      <Toolbar />
      <ProductContainer />
    </div>
  );
}

export default App;

