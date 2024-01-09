// import { useState, useEffect, useRef } from "react";
// import * as itemsAPI from '../../utilities/items-api';
// // import { Link } from 'react-router-dom';
// import CategoryList from '../../components/CategoryList/CategoryList';
// // import OrderDetail from '../../components/OrderDetail/OrderDetail';

// export default function WelcomePage( user, setUser, makeupItems, setMakeupItems) {

//   const [activeCat, setActiveCat] = useState('');
//   const categoriesRef = useRef([]);

//   useEffect(function() {
//     async function getItems() {
//       const items = await itemsAPI.getAll();
//       categoriesRef.current = [...new Set (items.map(item => item.category.name))];
//       setActiveCat(categoriesRef.current[0])
//     }
//     getItems();
//   }, []);

//   return (
//     <main className="WelcomePage">
//       <h1>Welcome to Eye Shop, get all the goodies here.</h1>
//       <CategoryList 
//         categories={categoriesRef.current}
//         activeCat={activeCat}
//         setActiveCat={setActiveCat}
//       />
//     </main>
//   );
// }
import { useState, useEffect, useRef } from "react";
import * as itemsAPI from '../../utilities/items-api';
import CategoryList from '../../components/CategoryList/CategoryList';

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
        };
      });

      setCategoryInfo(categoryInfoMap);
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

      {categoriesRef.current.map(category => (
        <div key={category}>
          <h2>{category}</h2>
          {categoryInfo[category] && (
            <div>
              <img src={categoryInfo[category].image} alt={`Random ${category} Image`} />
              <p>{categoryInfo[category].info}</p>
            </div>
          )}
        </div>
      ))}
    </main>
  );
}