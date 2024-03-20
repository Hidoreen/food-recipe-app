import { useContext } from "react"
import { GlobalContext } from "../../context"
import RecipeItem from "../../components/recipe-item"


const Favourite = () =>{
  const {favourites} = useContext(GlobalContext)

  return(
    <div className="p-8 container mx-auto grid sm:grid-cols-1 sm:items-center md:grid-cols-2  lg:grid-cols-4 xl:grid-cols-5 sm:gap-4 lg:gap-8 w-full">
      {
        favourites && favourites.length > 0 ? 
        favourites.map((item) => <RecipeItem key={item.id} item={item} />)
        :<div className="bg-rose-300 col-span-4 px-6 py-6"> <p className="lg:text-2xl font-bold md:whitespace-nowrap sm:whitespace-wrap">Nothing to show, please search something...</p></div>
      }
    </div>
  )
}

export default Favourite