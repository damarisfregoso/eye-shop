import './LineItem.css'

export default function LineItem({ lineItem, isPaid, handleChangeQty }) {
  return (
    <div className="LineItem">
      <div className='grid1'>
        <img src={lineItem.item.images} alt={lineItem.item.name}/>
      </div>
      <div className='grid2'>
        <div className='lineItemsDetail'>
          <h5>{lineItem.item.name}</h5>
          <h6>By {lineItem.item.by}</h6>
            {!isPaid &&
              <button
                className="btn-xs"
                onClick={() => handleChangeQty(lineItem.item._id, lineItem.qty - 1)}
              >−</button>
            }
            <span>{lineItem.qty}</span>
            {!isPaid &&
              <button
                className="btn-xs"
                onClick={() => handleChangeQty(lineItem.item._id, lineItem.qty + 1)}
              >+</button>
            }
          <h5>${lineItem.extPrice.toFixed(2)}</h5>
        </div>
      </div>
    </div>
  );
}