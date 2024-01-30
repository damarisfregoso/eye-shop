import './MakeupList.css';
import MakeupListItem from '../MakeupListItem/MakeupListItem';

export default function MakeupList({ makeupItems }) {
  console.log('makeupItems length:', makeupItems.length);
  const items = makeupItems.map(item =>
    <MakeupListItem
      key={item._id}
      makeupItem={item}
    />
  );
  return (
    <main className="MakeupList">
      {items}
    </main>
  );
}