import { useState, useEffect, useRef } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';
import WelcomePage from '../WelcomePage/WelcomePage';
import CategoryPage from '../CategoryPage/CategoryPage';
import * as itemsAPI from '../../utilities/items-api';
import CartPage from '../CartPage/CartPage';
import * as ordersAPI from '../../utilities/orders-api'

export default function App() {
  const [user, setUser] = useState(getUser());
  const [makeupItems, setMakeupItems] = useState([]);
  const [activeCat, setActiveCat] = useState('');
  const [categoryInfo, setCategoryInfo] = useState({});
  const [cart, setCart] = useState(null);
  const categoriesRef = useRef([]);
  const navigate = useNavigate();

  useEffect(function() {
    const storedActiveCat = localStorage.getItem('activeCat');
    if (storedActiveCat) {
      setActiveCat(storedActiveCat);
    }

    async function getItems() {
      const items = await itemsAPI.getAll();
      categoriesRef.current = [...new Set(items.map(item => item.category.name))];
      setMakeupItems(items);
      setActiveCat(storedActiveCat || categoriesRef.current[0]);

      // Generate random image and info for each category
      const categoryInfoMap = {};
      categoriesRef.current.forEach(category => {
        const categoryItems = items.filter(item => item.category.name === category);
        const randomItem = categoryItems[Math.floor(Math.random() * categoryItems.length)];

        categoryInfoMap[category] = {
          image: randomItem.images[0], // Assuming each item has an array of images
          info: randomItem.info,
          name: randomItem.name,
        };
      });

      setCategoryInfo(categoryInfoMap);
    }
    getItems();

    async function getCart() {
      const cart = await ordersAPI.getCart();
      setCart(cart);
    }
    getCart();
  }, []);

  useEffect(() => {
    // Store active category in local storage whenever it changes
    localStorage.setItem('activeCat', activeCat);
  }, [activeCat]);

  async function handleAddToOrder(itemId) {
    // 1. Call the addItemToCart function in ordersAPI, passing to it the itemId, and assign the resolved promise to a variable named cart.
    const updatedCart = await ordersAPI.addItemToCart(itemId);
    // 2. Update the cart state with the updated cart received from the server
    setCart(updatedCart);
  }

  async function handleChangeQty(itemId, newQty) {
    const updatedCart = await ordersAPI.setItemQtyInCart(itemId, newQty);
    setCart(updatedCart);
  }

  async function handleCheckout() {
    await ordersAPI.checkout();
    navigate('/orders');
  }

  return (
    <main className="App">
      <NavBar user={user} setUser={setUser} />
      <Routes>
        {/* Route components in here */}
        <Route path="/" element={<WelcomePage 
          user={user} 
          setUser={setUser} 
          categoriesRef={categoriesRef} 
          categoryInfo={categoryInfo}
          activeCat={activeCat}
          setActiveCat={setActiveCat}
          cart={cart}
          setCart={setCart}
        />}/>
        <Route path="/orders" element={<OrderHistoryPage 
          activeCat={activeCat}
          setActiveCat={setActiveCat}
          categoriesRef={categoriesRef}
          user={user} 
          setUser={setUser} 
        />} />
        <Route path="/login" element={<AuthPage setUser={setUser} />} />
        <Route path="/category/:cat" element={<CategoryPage 
          makeupItems={makeupItems}
          activeCat={activeCat}
          setActiveCat={setActiveCat}
          categoriesRef={categoriesRef}
          handleAddToOrder={handleAddToOrder}
          handleChangeQty={handleChangeQty}
          user={user} 
        />}/>
        <Route path="/cart" element={<CartPage 
          activeCat={activeCat}
          setActiveCat={setActiveCat}
          categoriesRef={categoriesRef}
          user={user} 
          setUser={setUser} 
          handleChangeQty={handleChangeQty}
          handleCheckout={handleCheckout}
          order={cart}
          setCart={setCart}
        />}/>
      </Routes>
    </main>
  );
}