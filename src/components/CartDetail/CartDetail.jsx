import './CartDetail.css'
import LineItem from "../LineItem/LineItem"

export default function CartDetail({ order, handleChangeQty, handleCheckout}) {
  if (!order) return null;
  console.log("Order Object:", order);

  const lineItems = order.lineItems.map(item =>
    <LineItem
      lineItem={item}
      isPaid={order.isPaid}
      handleChangeQty={handleChangeQty}
      key={item._id}
    />
  );

  return (
    <div className='CartDetail'>
      <div className='NewOrder'>
        <h1>New Order for <span>{new Date(order.updatedAt).toLocaleDateString()}</span></h1>
      </div>
      <div>
        {lineItems.length ?
          <>
            {lineItems}
            <section>
                <button
                  className="btn-sm"
                  onClick={handleCheckout}
                  disabled={!lineItems.length}
                >CHECKOUT</button>
              <span>{order.totalQty ? order.totalQty : 0}</span>
              <span>${order.orderTotal ? order.orderTotal.toFixed(2) : 0}</span>
            </section>
          </>
          :
          <div className="Goodies"> 
            <p>Woah there... </p> 
            <p> Browse the GOODIES first then check out your cart this is how it works!</p>
          </div>
        }
      </div>
    </div>
  )
}