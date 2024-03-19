import { useContext } from "react"
import { GlobalContext } from "../../context"
import RecipeItem from "../../components/recipe-item"

const Search = () => {
  const {recipeList, loading} = useContext(GlobalContext)

  if(loading) return <div>Loading, please wait...</div>

  return(
    <div className="py-8 container mx-auto grid grid-cols-3 gap-8">
      {
        recipeList && recipeList.length > 0 ? 
        recipeList.map((item) => <RecipeItem key={item.id} item={item} />)
        :<div className="bg-rose-300 col-span-4 px-6 py-6"> <p className="lg:text-2xl font-bold md:whitespace-nowrap sm:whitespace-wrap">Nothing to show, please search something...</p></div>
      }
    </div>
  )
}

export default Search