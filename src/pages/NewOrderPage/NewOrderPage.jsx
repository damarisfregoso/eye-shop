import { useState, useEffect, useRef } from "react";
import * as itemsAPI from '../../utilities/items-api';
import './NewOrderPage.css'
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import MakeupList from '../../components/MakeupList/MakeupList';
import CategoryList from '../../components/CategoryList/CategoryList';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import UserLogOut from '../../components/UserLogOut/UserLogOut';

export default function NewOrderPage() {

  const [makeupItems, setMakeupItems] = useState([]);
  const categoriesRef = useRef([]);

  useEffect(function() {
    async function getItems() {
      const items = await itemsAPI.getAll();
      categoriesRef.current = [...new Set (items.map(item => item.category.name))];
      setMakeupItems(items);
    }
    getItems();
  }, []);

  return (
    <main className="NewOrderPage">
  <aside>
    <Logo />
    <CategoryList
      categories={categoriesRef.current}
      activeCat={activeCat}
      setActiveCat={setActiveCat}
    />
    <Link to="/orders" className="button btn-sm">PREVIOUS ORDERS</Link>
    <UserLogOut user={user} setUser={setUser} />
  </aside>
  <MenuList
    menuItems={menuItems.filter(item => item.category.name === activeCat)}
  />
  <OrderDetail />
</main>
  );
}