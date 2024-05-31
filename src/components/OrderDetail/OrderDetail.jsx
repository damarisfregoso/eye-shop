import LineItem from "../LineItem/LineItem";
import './OrderDetail.css'
import { useState } from "react";

export default function OrderDetail ({ order }) {
  const [isExpanded, setIsExpanded] = useState(false);

  if(!order) return null;

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const lineItems = order.lineItems.map(item => (
  <LineItem
    lineItem={item}
    isPaid={order.isPaid}
    key={item._id}
  />
));

  return (
    <div className="OrderDetail">
      <div className="singleOrder" onClick={handleToggle}>
        {order.isPaid ? 
          <div className="singleInfo">
            <h1>Order <span className="smaller">{order.orderId}</span></h1>
            <p>{new Date(order.updatedAt).toLocaleDateString()}</p>
            <button className="toggle-btn">{isExpanded ? 'Click here to close details 🙈' : 'Click here to view details 😍'}</button>
          </div> 
          :
          <h1>New Order</h1>
        }
      </div>
      {isExpanded && (
        <div className="details">
          {lineItems.length ? 
            <>
              <div className="line-items-grid">
                {lineItems}
              </div>
              <section className="total">
                {order.isPaid ? <span>TOTAL&nbsp;&nbsp;</span> : null}
                <span>{order.totalQty} </span>
                <span className="right">&nbsp;&nbsp;${order.orderTotal.toFixed(2)}</span>
              </section>
            </>
            :
            <div className="shop">Shop The Goodies&#10083;</div>
          }
        </div>
      )}
    </div>
  )
}