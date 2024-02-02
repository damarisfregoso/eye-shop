import { useParams } from "react-router-dom"
import CategoryList from "../../components/CategoryList/CategoryList";
import MakeupList from "../../components/MakeupList/MakeupList";
import './CategoryPage.css'


export default function CategoryPage({ makeupItems, activeCat, setActiveCat, categoriesRef}) {

  const { cat } = useParams();
  const filteredMakeupItems = makeupItems.filter(item => item.category.name === cat);

  return(
  <div className="CategoryPage">
    <h1>Shop { cat }</h1>
    <CategoryList
          categories={categoriesRef.current}
          activeCat={activeCat}
          setActiveCat={setActiveCat}
        />
    <section>
      <MakeupList makeupItems={filteredMakeupItems} />
    </section>
</div>

  
  )
}