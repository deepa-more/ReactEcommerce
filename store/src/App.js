import React from 'react';
import './App.css';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';

function App() {
  return (
    <BrowserRouter>
    
    <div className="grid-container">
            <header className="header">
                <div className="brand">
                  <Link to="/">Store</Link>
                </div>
                
                <div className="category"><h3>Category: </h3>
                <select>
                  <option>Laptops</option>
                  <option>Mobiles</option>
                  <option>Speakers</option>

                </select>
                <a href="App.js">Laptops</a>
                </div>
                <div className="header-links">
                    <a href="signin.html">SignIn</a>
                </div>
            </header>
            <main className="main">
                <div className="content">
                  <Route path='/product/:id' component={ProductScreen} />
                  <Route path='/' exact={true} component={HomeScreen} />
                    
                </div>                
              </main>
              <footer className="footer">
                  All rights reserved
              </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
