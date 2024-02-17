import CategoryList from "../../components/CategoryList/CategoryList"
import CartDetail from "../../components/CartDetail/CartDetail"

export default function CartPage({ activeCat, setActiveCat, categoriesRef, user }) {

  return (
    <div className="CartPage">
      <h1>These Goodies 😍 Are Waiting For You &#10083; </h1>
        <CategoryList
        categories={categoriesRef.current}
        activeCat={activeCat}
        setActiveCat={setActiveCat}
      />
      {user ? (<CartDetail />) : (<h1>Silly Goose You Have To Log In To See Your Past Orders</h1>)}
    </div>
  )
}