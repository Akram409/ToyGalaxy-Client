import { Link, useLoaderData } from 'react-router-dom';
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const ToysDetails = () => {
   const user = useLoaderData()
   console.log(user)
   const {description,img,name,price,quantity,rating,seller,seller_email} = user

  return (
    <div className="hero min-h-[90vh]">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={img}
          className="max-w-md max-h-[500px] rounded-lg shadow-2xl me-5"
        />
        <div className='space-y-2'>
          <h1 className="text-5xl font-bold">{name}</h1>
          <h1 className="text-2xl font-bold">Seller: {seller}</h1>
          <h1 className="text-2xl font-bold">Email: {seller_email}</h1>
          <br />
          <p className='font-bold'>Quantity: {quantity} </p>
          <p className="font-bold">Price: {price}</p>
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
          <p className='font-bold'>Description: {description}</p>
          <div className='space-x-2'>
          <Link to='/'><button className="btn font-bold mt-5">Buy Now</button></Link>
          <Link to='/'><button className="btn font-bold mt-5 btn-secondary ">Edit</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToysDetails;
