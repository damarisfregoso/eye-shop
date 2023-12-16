import { useState, useEffect } from "react";

export default function NewOrderPage() {

  const [makeupItems, setMakeupItems] = useState([]);

  useEffect(function() {
    console.log('NewOrderPage rendered');
  });


  return (
    <h1>NewOrderPage</h1>
  );
}