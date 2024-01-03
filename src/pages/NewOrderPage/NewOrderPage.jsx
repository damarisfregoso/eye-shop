import { useState, useEffect, useRef } from "react";
import * as itemsAPI from '../../utilities/items-api';
import './NewOrderPage.css'
import { Link } from 'react-router-dom';
import CategoryList from '../../components/CategoryList/CategoryList';
import OrderDetail from '../../components/OrderDetail/OrderDetail';

export default function NewOrderPage( user, setUser, makeupItems, setMakeupItems) {

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
      <h1>Hello world</h1>
      <aside>
        <CategoryList
          categories={categoriesRef.current}
          activeCat={activeCat}
          setActiveCat={setActiveCat}
        />
      </aside>
  <OrderDetail />
</main>
  );
}