import { useEffect } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom"
import Checkout from './scenes/checkout/Checkout';
import Confirmation from './scenes/checkout/Confirmation';
import Navbar from './scenes/global/Navbar';
import Home from "./scenes/home/Home"
import ItemDetails from './scenes/itemDetails/ItemDetails';
import CartMenu from './scenes/global/CartMenu';
import Footer from './scenes/global/Footer'

// Component provided by React Router that ensures when you go to another page you start at the top of the page.
// This way the user isnt on the last position they were in when they go to the next page.
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0,0);
  }, [pathname])

  return null;
}

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/item/:itemId" element={<ItemDetails />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/checkout/success" element={<Confirmation />} />
        </Routes>
        <CartMenu />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
