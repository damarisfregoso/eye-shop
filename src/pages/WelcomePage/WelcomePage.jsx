import { Link } from "react-router-dom";
import CategoryList from "../../components/CategoryList/CategoryList";
import './WelcomePage.css';


export default function WelcomePage({ user, setUser, categoriesRef, categoryInfo, activeCat, setActiveCat, cart, setCart }) {


  return (
    <main className="WelcomePage">
      {user ? (<h1>Shop all the goodies below	&darr;</h1>) : ( <h1>Welcome to Eye Shop, Explore all the goodies below	&darr;</h1> ) }
      
      <CategoryList
        categories={categoriesRef.current}
        activeCat={activeCat}
        setActiveCat={setActiveCat}
      />

      {categoriesRef.current.map(category => (
        <div className="welcomeDiv" key={category}>
          <h2>{category}</h2>        
          <Link key={category} to={`/category/${category}`}>
            {categoryInfo[category] && (
              <div className="Category-Box">
                <div className="Box-1">
                  <img src={categoryInfo[category].image} alt={`Random ${category}`} />
                </div>
                <div className="Box-2">
                  <h1>{categoryInfo[category].name}</h1>
                  <p>{categoryInfo[category].info}</p>
                </div>
              </div>
            )}
          </Link>
        </div>

      ))}
    </main>
  );
}