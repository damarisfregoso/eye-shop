import CategoryList from "../../components/CategoryList/CategoryList"

export default function CartPage({activeCat, setActiveCat, categoriesRef}) {

  return (
    <div className="CartPage">
      <h1>These Goodies 😍 Are Waiting For You &#10083; </h1>
        <CategoryList
        categories={categoriesRef.current}
        activeCat={activeCat}
        setActiveCat={setActiveCat}
      />
    </div>
  )
}