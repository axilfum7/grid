import { CupCake,Pizza,Kebab,Salmon,Doughnut } from "../assets/images"
import { Button, CategoryCard } from "../components"

const Category = () => {
  const categoryList = [
    { id: 1, icon: CupCake, title: "Cupcake", count: "22 Items" },
    { id: 2, icon: Pizza, title: "Pizza", count: "25 Items" },
    { id: 3, icon: Kebab, title: "Kebab", count: "12 Items" },
    { id: 4, icon: Salmon, title: "Salmon", count: "22 Items" },
    { id: 5, icon: Doughnut, title: "Doughnut", count: "11 Items" },
  ]

  return (
    <section className="py-20">
      <div className="containers">

        <h2 className="text-3xl font-bold mb-2">
          Browser Our Category
        </h2>
        <h3 className="text-3xl font-bold text-[#8BAC3E] mb-10">
          Receipt
        </h3>

        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categoryList.map(item => (
            <CategoryCard key={item.id} item={item}/>
          ))}
        </ul>
        <Button title={"PREV"}/>
      </div>
    </section>
  )
}

export default Category
