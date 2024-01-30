import './MakeupList.css';
import MakeupListItem from '../MakeupListItem/MakeupListItem';

export default function MakeupList({ makeupItems }) {

  return (
    <div className="container-fluid">
      <div className="row">
        {makeupItems.map(item => (
          <div key={item._id} className="col-md-4 col-12">
            {/* Each item will take 3 columns on large screens */}
            <MakeupListItem makeupItem={item} />
          </div>
        ))}
      </div>
    </div>
  );
}