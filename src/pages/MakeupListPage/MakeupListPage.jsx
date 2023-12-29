import './MakeupListPage.css';
import MenuListItem from '../../components/MenuListItem/MenuListItem';

export default function MenuList({ makeupItems, handleAddToOrder }) {
  const items = makeupItems.map(item =>
    <MenuListItem
      key={item._id}
      makeupItems={item}
      handleAddToOrder={handleAddToOrder}
    />
  );
  return (
    <main className="MenuList">
      {items}
    </main>
  );
}