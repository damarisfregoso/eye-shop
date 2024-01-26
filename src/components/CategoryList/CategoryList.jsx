import { Link } from 'react-router-dom';
import './CategoryList.css';

export default function CategoryList({ categories, activeCat, setActiveCat }) {
  const cats = categories.map(cat =>
    <li
      key={cat}
      className={cat === activeCat ? 'active' : ''}
      onClick={() => setActiveCat(cat)}
    >
      <Link to={`/category/${cat}`}>{cat}</Link>
    </li>
  );
  return (
    <ul className="CategoryList">
      {cats}
    </ul>
  );
}
