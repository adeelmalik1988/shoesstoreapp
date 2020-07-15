import React from 'react';
import Home from './Components/Home';
import About from './Components/About';
import {Product, ProductList} from './Components/Product';
import PageNotFound from './Components/PageNotFound';

import ProductItem from './Components/ProductItem';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';



function RouteConfig() {
  return (
    <div >
      <Router>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='product'>Product</Link>
          <Link to='/about'>About</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/product' element={<Product />} >
            <Route path='/' element={<ProductList />} />
            <Route path=':slug' element={<ProductItem />} />
          </Route>
          <Route path='*' element={<PageNotFound />} />
        </Routes>

      </Router>


    </div>
  );
}

export default RouteConfig;
