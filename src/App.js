import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Cart from './pages/Cart/Cart';
import CallJavaScript from './Components/CallJavaScript/CallJavaScript';
import Register from './pages/Register/Register';
import Hat from './pages/Products/Hat/Hat';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import ProductDetail from './Components/ProductDetail/ProductDetail';
import Shoes from './pages/Products/Shoes/Shoes';
import Nike from './pages/Products/Shoes/Nike/Nike';
import Adidas from './pages/Products/Shoes/Adidas/Adidas';
import Vans from './pages/Products/Shoes/Vans/Vans';
import MLB from './pages/Products/Shoes/MLB/MLB';
import MenShirt from './pages/Products/Shirt/MenShirt/MenShirt';
import TShirt from './pages/Products/Shirt/TShirt/TShirt';
import Shirts from './pages/Products/Shirt/Shirts/Shirts';
import PoloShirt from './pages/Products/Shirt/PoloShirt/PoloShirt';
import SportShirt from './pages/Products/Shirt/SportShirt/SportShirt';
import Coat from './pages/Products/Shirt/Coat/Coat';
import SearchProduct from './pages/SearchProduct/SearchProduct';
import Error from './pages/Error/Error';
import Success from './pages/Success/Success';

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/register" element={<Register />} />
                <Route path="/hat" element={<Hat />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/product/:productId" element={<ProductDetail />} />
                <Route path="/shoes" element={<Shoes />} />
                <Route path="/shoes/nike" element={<Nike />} />
                <Route path="/shoes/adidas" element={<Adidas />} />
                <Route path="/shoes/vans" element={<Vans />} />
                <Route path="/shoes/mlb" element={<MLB />} />
                <Route path="/ao-nam" element={<MenShirt />} />
                <Route path="/ao-thun" element={<TShirt />} />
                <Route path="/ao-so-mi" element={<Shirts />} />
                <Route path="/ao-polo" element={<PoloShirt />} />
                <Route path="/ao-the-thao" element={<SportShirt />} />
                <Route path="/ao-khoac" element={<Coat />} />
                <Route path="/product/search/keyword=:searchValue" element={<SearchProduct />} />
                <Route path="/payment" element={<Success />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
            <CallJavaScript />
        </div>
    );
}

export default App;
