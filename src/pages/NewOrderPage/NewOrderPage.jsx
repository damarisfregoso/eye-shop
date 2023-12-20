import { useState, useEffect, useRef } from "react";
import * as itemsAPI from '../../utilities/items-api';

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
    <h1>NewOrderPage</h1>
  );
}