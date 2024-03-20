import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetails, setRecipeDetails] = useState(null);
  const[favourites, setFavourites] = useState([]);
  const navigate = useNavigate()

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      setLoading(true);
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );
      const results = await res.json();

      if (results?.data?.recipes) {
        setRecipeList(results?.data?.recipes);
        setSearchParam("");
        setLoading(false);
        navigate('/')
      }

      console.log(results);
    } catch (error) {
      console.log(error);
      setSearchParam("");
      setLoading(false);
    }
  }

  function handleAddClick(currentItem) {
    console.log(currentItem)
    let cpyFavourites = [...favourites]
    const index = cpyFavourites.findIndex(item => item.id === currentItem.id)

    if(index === -1) {
      cpyFavourites.push(currentItem);
    } else {
      cpyFavourites.splice(index);
    }
    setFavourites(cpyFavourites);
  }

  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        setSearchParam,
        handleSubmit,
        loading,
        setLoading,
        recipeList,
        setRecipeList,
        recipeDetails,
        setRecipeDetails,
        favourites,
        setFavourites,
        handleAddClick,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

GlobalState.propTypes = {
  children: PropTypes.node.isRequired,
};
