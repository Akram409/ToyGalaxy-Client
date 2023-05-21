import { Link } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const CategoryCard = ({ item }) => {
  const { _id, category_name, img, name, price, rating } = item;

  return (
    <Link to="/">
      <div className="overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl">
        <img
          src={img}
          alt=""
          className="object-fill w-full h-56 md:h-64 xl:h-80"
        />

        <div className="bg-black px-6 py-4 bg-opacity-75 opacity-0 hover:opacity-100 text-gray-300 absolute inset-0 transition-opacity duration-200 flex flex-col text-center">
          <h1 className="text-3xl font-bold">{category_name}</h1>
          <br />
          <p className="text-2xl font-bold">Name: {name}</p>
          <br />
          <div className="flex items-center gap-2">
            <div>
              <p>
                <strong>Rating : </strong>
                {rating}
              </p>
            </div>
            <Rating
              style={{ maxWidth: 130 }}
              value={Math.round({ rating })}
              readOnly
            />
          </div>
          <br />
          <p className="text-xl font-bold">Price: {price}</p>
          <p className="mt-auto">
            <Link to={`/toyDetails/${_id}`}><button className="btn btn-primary font-bold text-white">
              View Details
            </button></Link>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
