// import * as usersService from'../../utilities/users-service';
import CategoryList from "../../components/CategoryList/CategoryList";
import OrderDetail from "../../components/OrderDetail/OrderDetail";
import './OrderHistoryPage.css'

export default function OrderHistoryPage({activeCat, setActiveCat, categoriesRef, user}) {

  return (
    <div className="OrderHistoryPage">
      <h1>Let's take a moment to look 👀 back on your orders&#10083; 🤩</h1>
      <CategoryList
        categories={categoriesRef.current}
        activeCat={activeCat}
        setActiveCat={setActiveCat}
      />
      {user ? (<OrderDetail />) : (<h1>Silly Goose You Have To Log In To See Your Past Orders</h1>)}
    </div>
  );
}