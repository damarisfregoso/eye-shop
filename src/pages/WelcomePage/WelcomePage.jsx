import { useState, useEffect, useRef } from "react";
import * as itemsAPI from '../../utilities/items-api';
// import { Link } from 'react-router-dom';
import CategoryList from '../../components/CategoryList/CategoryList';
// import OrderDetail from '../../components/OrderDetail/OrderDetail';

export default function WelcomePage( user, setUser, makeupItems, setMakeupItems) {

  const [activeCat, setActiveCat] = useState('');
  const categoriesRef = useRef([]);

  useEffect(function() {
    async function getItems() {
      const items = await itemsAPI.getAll();
      categoriesRef.current = [...new Set (items.map(item => item.category.name))];
      setActiveCat(categoriesRef.current[0])
    }
    getItems();
  }, []);

  return (
    <main className="WelcomePage">
      <h1>Welcome to Eye Shop, get all the goodies here.</h1>
      <CategoryList 
        categories={categoriesRef.current}
        activeCat={activeCat}
        setActiveCat={setActiveCat}
      />
    </main>
  );
}