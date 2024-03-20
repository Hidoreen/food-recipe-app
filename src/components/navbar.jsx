import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { GlobalContext } from "../context"


const Navbar = () => {

  const{searchParam, setSearchParam, handleSubmit} = useContext(GlobalContext)

  console.log(searchParam);


  return (
   <nav className="flex justify-between items-center py-4 px-8 container mx-auto flex-col lg:flex-row  gap-5 lg:gap-0 rounded">
    <h2 className="text-2xl font-semibold">
      <NavLink to={'/'}>Food Recipe</NavLink>
    </h2>
    <form onSubmit={handleSubmit}>
      <input 
      type="text"
      name="search"
      placeholder="Enter item name"
      className="px-8 py-4 rounded text-xl shadow-lg shadow-rose-200 sm:w-200px w-full"
      value={searchParam}
      onChange={(event) => setSearchParam(event.target.value)}
      />
    </form>

    <ul className="flex gap-4">
      <li>
        <NavLink 
        to={'/'} 
        className="text-red-700 hover:text-red-400 duration-300"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink 
        to={'/favourite'} 
        className="text-red-700 hover:text-red-400 duration-300"
        >
          Favourite
        </NavLink>
      </li>
    </ul>
   </nav>
  )
}

export default Navbar