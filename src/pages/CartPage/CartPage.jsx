import { Link } from 'react-router-dom';
import CategoryList from "../../components/CategoryList/CategoryList"
import CartDetail from "../../components/CartDetail/CartDetail"
import './CartPage.css'

export default function CartPage({ activeCat, setActiveCat, categoriesRef, user, order, setCart, handleChangeQty, handleCheckout}) {

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
          order={order}
          handleChangeQty={handleChangeQty}
          handleCheckout={handleCheckout}
        />
        ) : (
        <>
          <h1>Silly Goose You Have To Log In To See Your Cart!</h1>
          <Link className="click" to="/login" >
          Click here to login!
        </Link>
        </>
        )}
    </div>
  )
}