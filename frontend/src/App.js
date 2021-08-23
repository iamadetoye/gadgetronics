import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MenuBar from './components/MenuBar/MenuBar';
import Search from './components/Search/Search';

import HomePage from './pages/HomePage/HomePage';
import ProductPage from './pages/ProductPage/ProductPage';
import ShopPage from './pages/ShopPage/ShopPage';

function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <MenuBar />
        <Search />
        <Route path="/" exact component={HomePage} />
        <Switch>
          <Route path="/shop" component={ShopPage} />
          <Route path="/product/:id" component={ProductPage} />
        </Switch>
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
