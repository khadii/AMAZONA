
import { BrowserRouter, Route,Routes, Link } from 'react-router-dom';
import CartScreen from './screens/CartScreen';
import Homescreen from './screens/Homescreen';
import Productscreen from './screens/Productscreen';
function App() {
  return (
    <BrowserRouter>
    <div className="grid-container">
        <header className="row">
            <Link className="brand" to="/">Amazona</Link>
            <div><Link to="/cart">Cart</Link>
                <Link to="/signin">Sign in</Link>
    </div>
        </header>
        <main>
       <Routes>
       <Route path="/Cart/:id" element={<CartScreen/>}></Route>

          <Route path="/product/:id" element={<Productscreen/>}></Route>
          <Route path="/" element={<Homescreen/>} exact />

        
          </Routes>
        </main>
        
        <footer className="row center">
            all rights reserved

        </footer>
    </div>
    </BrowserRouter>
  );
}
export default App;
