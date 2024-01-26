import { useParams } from "react-router-dom"
import MakeupList from "../../components/MakeupList/MakeupList";

export default function CategoryPage() {

  const { cat } = useParams();

  return(
  <>
  <h1>Shop { cat }</h1>
  <div className="CategoryPage">
    <MakeupList
      makeupItems={makeupItems.filter(item => item.category.name === activeCat)}
      handleAddToOrder={handleAddToOrder}
    />
  </div>
  </>
  
  )
}