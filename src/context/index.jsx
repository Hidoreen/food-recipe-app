import { createContext, useState} from "react";
import PropTypes from 'prop-types';

export const GlobalContext = createContext(null)

export default function GlobalState({children}) {
  const[searchParam,setSearchParam] = useState("")
  const[loading, setLoading] = useState(false);
  const[recipeList, setRecipeList] = useState([])

 async function handleSubmit(event) {
  event.preventDefault();
  try {
    setLoading(true)
    const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`)
    const results = await res.json();

    if(results?.data?.recipes) {
      setRecipeList(results?.data?.recipes)
      setSearchParam("");
      setLoading(false)
    }
    
    console.log(results)
  } catch (error) {
    console.log(error);
    setSearchParam('');
    setLoading(false)
  }
 }

 console.log(recipeList, loading)

  return <GlobalContext.Provider 
  value={{searchParam,setSearchParam, handleSubmit, loading, setLoading, recipeList, setRecipeList}}
  >{children}
  </GlobalContext.Provider>
}

GlobalState.propTypes = {
  children: PropTypes.node.isRequired,
}