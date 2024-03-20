import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context";


const Details = () => {
  const {id} = useParams()
  const {recipeDetails, setRecipeDetails, handleAddClick, favourites} = useContext(GlobalContext);

  useEffect(()=>{
    async function getRecipeDetails() {
      try {
        const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);
        const data = await res.json();
        console.log(data)
        if(data?.data.recipe) {
          setRecipeDetails(data?.data.recipe);
        }
      } catch (error) {
        console.log(error)
      }
    }
    getRecipeDetails()
  },[id])

  return(
    <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="h-96 overflow-hidden rounded-xl group">
        <img src={recipeDetails?.image_url} alt="Item pic" className="object-fill block w-full h-full" />
      </div>
      <div className="flex flex-col gap-4">
        <span className="text-sm text-gray-500">{recipeDetails?.publisher}</span>
        <h3 className="text-lg font-semibold">{recipeDetails?.title}</h3>
        <button onClick={() => handleAddClick(recipeDetails)} className="p-3 px-6 rounded-lg uppercase tracking-wider mt-3 inline shadow-md bg-black text-white font-semibold">
          {
            favourites && favourites.length > 0 && favourites.findIndex((item) => item.id === recipeDetails.id) !== -1 ?
            'Remove fro Favourites' :
            'Add to Favourites'
          }
        </button>
        <div>
        <span className="text-xl font-semibold text-black">Ingredients</span> <hr className="border-gray-400  mt-2 mb-3"/>
        <ul className="flex flex-col gap-4">
          {
            recipeDetails?.ingredients.map((item) => <li key={item.index}>
              <span className=" text-black">{item.description}</span> &nbsp;
              <span className="font-semibold text-black">{item.quantity}, {item.unit}</span>
              </li>)
          }
        </ul>
      </div>
      </div>
    
    </div>
  );
}

export default Details