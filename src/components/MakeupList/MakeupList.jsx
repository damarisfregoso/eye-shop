import './MakeupList.css';
import MakeupListItem from '../MakeupListItem/MakeupListItem';

export default function MakeupList({ makeupItems, handleAddToOrder }) {
  const items = makeupItems.map(item =>
    <MakeupListItem
      key={item._id}
      makeupItem={item}
      handleAddToOrder={handleAddToOrder}
    />
  );
  return (
    <main className="MakeupList">
      {items}
    </main>
  );
}