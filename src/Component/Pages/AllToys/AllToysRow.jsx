import { Link } from "react-router-dom";

const AllToysRow = ({ toy, index }) => {
  console.log(toy._id);
  return (
    <tr className="text-center">
      <th>{index + 1}</th>
      <td>
        <div className="flex justify-center items-center">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={toy?.img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td>{toy?.name}</td>
      <td>{toy?.seller}</td>
      <td>{toy?.category_name}</td>
      <td>{toy?.price}</td>
      <td>{toy?.quantity}</td>
      <td>
        <Link to={`/toyDetails/${toy._id}`}><button className="btn btn-warning text-black">Details</button></Link>
      </td>
    </tr>
  );
};

export default AllToysRow;
