import { Link } from "react-router-dom";

const GalleryCard = ({card}) => {
    console.log(card)
    const {img,name,subtitle,price,} = card
    return (
        <Link to="/">
      <div className='overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl'>
        <img
          src={img}
          alt=''
          className='object-cover w-full h-56 md:h-64 xl:h-80'
        />

        <div className='bg-black px-6 py-4 bg-opacity-75 opacity-0 hover:opacity-100 text-gray-300 absolute inset-0 transition-opacity duration-200 flex flex-col text-center'>
          <p className="text-3xl font-bold">Name: {name}</p>
          <br />
          <p className="text-xl font-bold">{subtitle}</p>
          <p className='mt-auto text-xl font-bold'>Price: {price}</p>
        </div>
      </div>
    </Link>
    );
};

export default GalleryCard;