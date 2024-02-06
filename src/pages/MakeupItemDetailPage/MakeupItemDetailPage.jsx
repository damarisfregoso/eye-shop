import './MakeupItemDetailPage.css'
import { useParams } from 'react-router-dom'; 

export default function MakeupItemDetailPage({ makeupItems }) {

  const { item } = useParams();
  const selectedItem = makeupItems.find(() => makeupItems.name === item)

  return (
    <div>
      <h1>{item}</h1>
      {selectedItem}
    </div>
  );
}