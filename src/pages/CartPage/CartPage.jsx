import CategoryList from "../../components/CategoryList/CategoryList"
import CartDetail from "../../components/CartDetail/CartDetail"

export default function CartPage({ activeCat, setActiveCat, categoriesRef, user, cart, setCart, handleChangeQty, handleCheckout}) {

  return (
    <div className="CartPage">
      <h1>Here is your cart &#10083; 😍</h1>
        <CategoryList
        categories={categoriesRef.current}
        activeCat={activeCat}
        setActiveCat={setActiveCat}
      />
      {user ? (
        <CartDetail 
        order={cart}
        handleChangeQty={handleChangeQty}
        handleCheckout={handleCheckout}
        />
        ) : (
        <h1>Silly Goose You Have To Log In To See Your Cart!</h1>
        )}
    </div>
  )
}