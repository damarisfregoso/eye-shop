import CategoryList from "../../components/CategoryList/CategoryList"
import CartDetail from "../../components/CartDetail/CartDetail"
import * as ordersAPI from '../../utilities/orders-api'
import { useEffect } from "react";

export default function CartPage({ activeCat, setActiveCat, categoriesRef, user, cart, setCart}) {

  useEffect(function() {
    async function getCart() {
      const cart = await ordersAPI.getCart();
      setCart(cart);
    }
    getCart();
  }, []);

  return (
    <div className="CartPage">
      <h1>These Goodies 😍 Are Waiting For You &#10083; </h1>
        <CategoryList
        categories={categoriesRef.current}
        activeCat={activeCat}
        setActiveCat={setActiveCat}
      />
      {user ? (
        <CartDetail order={cart}/>
        ) : (
        <h1>Silly Goose You Have To Log In To See Your Cart!</h1>
        )}
    </div>
  )
}