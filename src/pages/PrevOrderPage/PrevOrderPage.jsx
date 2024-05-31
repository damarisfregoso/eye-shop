import { useState, useEffect} from 'react';
// import { Link } from 'react-router-dom'
import * as ordersAPI from '../../utilities/orders-api';
import CategoryList from "../../components/CategoryList/CategoryList";
import OrderDetail from "../../components/OrderDetail/OrderDetail";
import './PrevOrderPage.css'

export default function PrevOrderPagePage({activeCat, setActiveCat, categoriesRef, user}) {
  const [orders, setOrders] = useState([]);
  const [activeOrder, setActiveOrder] = useState(null);

  useEffect(function() {
    async function getOrders() {
      const orders = await ordersAPI.getAllForUser();
      setActiveOrder(orders[0] || null);
      setOrders(orders);
    }
    getOrders();
  }, []);

  return (
    <div className="PrevOrderPage">
      <h1>Let's take a moment to look 👀 back on your orders&#10083; 🤩</h1>
      <CategoryList
        categories={categoriesRef.current}
        activeCat={activeCat}
        setActiveCat={setActiveCat}
      />
      <div className="PrevOrderGrid">
      {orders.length > 0 ? (
          orders.map(order => (
        <OrderDetail 
        key={order._id}
        order={order}
        isActive={activeOrder && activeOrder._id === order._id}
        setActiveOrder={setActiveOrder}
        />
      ))
    ) : (
      <h2>Buy some goodies first 💞</h2>
    )}
      </div>
    </div>
  );
}