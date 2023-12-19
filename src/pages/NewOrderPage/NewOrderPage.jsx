import { useState, useEffect } from "react";
import * as itemsAPI from '../../utilities/items-api';

export default function NewOrderPage() {

  const [makeupItems, setMakeupItems] = useState([]);

  useEffect(function() {
    async function getItems() {
      const items = await itemsAPI.getAll();
      setMakeupItems(items);
    }
    getItems();
  }, []);

  return (
    <h1>NewOrderPage</h1>
  );
}