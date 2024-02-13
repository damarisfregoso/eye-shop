// import * as usersService from'../../utilities/users-service';
import CategoryList from "../../components/CategoryList/CategoryList";

export default function OrderHistoryPage({activeCat, setActiveCat, categoriesRef}) {

  return (
    <div className="OrderHistoryPage">
      <h1>Let's take a moment to look 👀 back on your orders&#10083; 🤩</h1>
      <CategoryList
        categories={categoriesRef.current}
        activeCat={activeCat}
        setActiveCat={setActiveCat}
      />
    </div>
  );
}