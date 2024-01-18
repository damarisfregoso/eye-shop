import { useState, useEffect, useRef } from "react";
import * as itemsAPI from '../../utilities/items-api';
import CategoryList from "../../components/CategoryList/CategoryList";
import './WelcomePage.css';


export default function WelcomePage({ user, setUser, makeupItems, setMakeupItems }) {
  const [activeCat, setActiveCat] = useState('');
  const [categoryInfo, setCategoryInfo] = useState({});
  const categoriesRef = useRef([]);

  useEffect(() => {
    async function getItems() {
      const items = await itemsAPI.getAll();
      categoriesRef.current = [...new Set(items.map(item => item.category.name))];
      setActiveCat(categoriesRef.current[0]);

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
  }, []);

  return (
    <main className="WelcomePage">
      {user ? (<h1>Shop all the goodies below	&darr;</h1>) : ( <h1>Welcome to Eye Shop, Explore all the goodies below	&darr;</h1> ) }
      
      <CategoryList
        categories={categoriesRef.current}
        activeCat={activeCat}
        setActiveCat={setActiveCat}
      />

      {categoriesRef.current.map(category => (
        <div key={category}>
        <h2>{category}</h2>
          {categoryInfo[category] && (
            <div className="Category-Box">
              <div className="Box-1">
                <img src={categoryInfo[category].image} alt={`Random ${category} Image`} />
              </div>
              <div className="Box-2">
                <h1>{categoryInfo[category].name}</h1>
                <p>{categoryInfo[category].info}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </main>
  );
}