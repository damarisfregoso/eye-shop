import './CartDetail.css'
import LineItem from "../LineItem/LineItem"

export default function CartDetail({ order, handleChangeQty, handleCheckout}) {
  if (!order) return null;

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
      <div>
        {order.isPaid ?
          <span>ORDER <span className="smaller">{order.orderId}</span></span>
          :
          <span>NEW ORDER</span>
        }
        <span>{new Date(order.updatedAt).toLocaleDateString()}</span>
      </div>
      <div>
        {lineItems.length ?
          <>
            {lineItems}
            <section className="total">
              {order.isPaid ?
                <span className="right">TOTAL&nbsp;&nbsp;</span>
                :
                <button
                  className="btn-sm"
                  onClick={handleCheckout}
                  disabled={!lineItems.length}
                >CHECKOUT</button>
              }
              <span>{order.totalQty}</span>
              <span className="right">${order.orderTotal.toFixed(2)}</span>
            </section>
          </>
          :
          <div className="Goodies"> Woah there... Browse the GOODIES first then check out your cart this is how it works!</div>
        }
      </div>
    </div>
  )
}