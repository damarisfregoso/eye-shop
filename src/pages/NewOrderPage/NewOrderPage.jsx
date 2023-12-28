import { useState, useEffect, useRef } from "react";
import * as itemsAPI from '../../utilities/items-api';
import './NewOrderPage.css'
import { Link } from 'react-router-dom';
import MakeupListPage from '../MakeupListPage/MakeupListPage';
import CategoryList from '../../components/CategoryList/CategoryList';
import OrderDetail from '../../components/OrderDetail/OrderDetail';

export default function NewOrderPage( user, setUser) {

  const [makeupItems, setMakeupItems] = useState([]);
  const [activeCat, setActiveCat] = useState('');
  const categoriesRef = useRef([]);

  useEffect(function() {
    async function getItems() {
      const items = await itemsAPI.getAll();
      categoriesRef.current = [...new Set (items.map(item => item.category.name))];
      setMakeupItems(items);
      setActiveCat(categoriesRef.current[0])
    }
    getItems();
  }, []);

  return (
    <main className="NewOrderPage">
  <aside>
    <CategoryList
      categories={categoriesRef.current}
      activeCat={activeCat}
      setActiveCat={setActiveCat}
    />
    <Link to="/orders" className="button btn-sm">PREVIOUS ORDERS</Link>
  </aside>
  <MakeupListPage
    makeupItems={makeupItems.filter(item => item.category.name === activeCat)}
  />
  <OrderDetail />
</main>
  );
}