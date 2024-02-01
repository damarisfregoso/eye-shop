import './MakeupList.css';
import MakeupListItem from '../MakeupListItem/MakeupListItem';

export default function MakeupList({ makeupItems }) {

  return (
    <div className="MakeupList">
        {makeupItems.map(item => (
          <div key={item._id} className='ListItem'>
            {/* Each item will take 3 columns on large screens */}
            <MakeupListItem makeupItem={item} />
          </div>
        ))}
    </div>
  );
}