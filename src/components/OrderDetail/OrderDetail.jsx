import LineItem from "../LineItem/LineItem";

export default function OrderDetail ({ order }) {
  if(!order) return null;

  const lineItems = order.lineItems.map(item =>
  <LineItem
    lineItem={item}
    isPaid={order.isPaid}
    key={item._id}
  />
);

  return (
    <div className="OrderDetail">
      <div className="title">
        {order.isPaid ? 
        <h1>Order {order.orderId}</h1>
        :
        <h1>New Order</h1>
        }
        <span>{new Date(order.updatedAt).toLocaleDateString()}</span>
      </div>
      <div>
        {lineItems.length ? 
          <>
          <section className="total">
          {order.isPaid ?
                <span className="right">TOTAL&nbsp;&nbsp;</span>
                :
              null
              }
              <span>{order.totalQty}</span>
              <span className="right">${order.orderTotal.toFixed(2)}</span>
          </section>
          </>
          :
          <div className="shop">Shop The Goodies&#10083;</div>
        }
      </div>
    </div>
  )
}