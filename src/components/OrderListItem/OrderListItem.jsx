import './OrderListItem.css';

export default function OrderListItem({ order, activeOrder, setActiveOrder }) {

  return (
    <div
      className={`OrderListItem ${order._id === activeOrder ? 'active' : ''}`}
      onClick={() => setActiveOrder(order._id)}
    >
      <div>
        <div>Order Id: <span className="smaller">{order._id}</span></div>
        <div className="smaller">{new Date(order.updatedAt).toLocaleDateString()}</div>
      </div>
      <div className="align-rt">
        <div>${order.lineItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</div>
      </div>
    </div>
  );
}