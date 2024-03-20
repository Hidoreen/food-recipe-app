import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function RecipeItem({ item }) {
  return (
    <div className="shadow-xl w-80 rounded-lg">
      <div className=" overflow-hidden p-5 flex flex-col items-center rounded-md" key={item.id}>
        <img src={item.image_url} alt="item photo" className="block w-full object-contain h-60 " />
        <div className="mt-2 text-center block">
        <span className="text-sm text-gray-500 mb-5">Publisher: {item?.publisher}</span> <hr></hr>
          <h3 className="text-lg font-semibold">{item?.title}</h3> <br></br>
          <Link to={`/details/${item.id}`} className="text-blue-500">Recipe Details</Link>
        </div>
      </div>
    </div>
  );
  
}

RecipeItem.propTypes = {
  item: PropTypes.any.isRequired,
};
