import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Details from "../../pages/details";

export default function RecipeItem({ item }) {
  return (
    <div className="shadow-xl w-80">
      <div className="h-60 overflow-hidden p-5 flex items-center" key={item.id}>
        <img src={item.image_url} alt="item photo" className="block w-full" />
        <div className="mt-2 text-center bloc">
          <h3 className="text-lg font-semibold">{item?.title}</h3>
          <span className="text-sm text-gray-500">{item?.publisher}</span>
          <Link to="#">Recipe Details</Link>
        </div>
      </div>
    </div>
  );
  
}

RecipeItem.propTypes = {
  item: PropTypes.any.isRequired,
};
