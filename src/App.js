import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import data, { categoriesUnique } from './data';
import ProductList from './ProductList';
import Categories from './Categories';
import Header from './Header'

function App() {
  const [category, setCategory] = useState('All')
  return (
    <div className="App">
      <Header title="Product.io"
      productCount={data.length}
      categoryCount={categoriesUnique.length}
      />
      <Categories 
      category={category} 
      onClick={newCategory => setCategory(newCategory)}
      />
      <ProductList
      category={category} 
      />
    </div>
  );
}

export default App;
