import { Link } from "react-router-dom";

const MyToysRow = ({ toy, index , handleDelete }) => {
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
      <td>{toy?.seller_email}</td>
      <td>{toy?.category_name}</td>
      <td>${toy?.price}</td>
      <td>{toy?.rating}</td>
      <td>{toy?.quantity}</td>
      <td>{toy?.description}</td>
      <td>
        <Link to={`/updateToys/${toy?._id}`}><button className="btn btn-accent bg-[#1F8A70] text-white border-none hover:bg-[#1F8A70]" >Update</button></Link>
      </td>
      <td>
        <button onClick={() => handleDelete(toy?._id)} className="btn bg-[#FC7300] text-white border-none hover:bg-[#FC7300]">Delete</button>
      </td>
    </tr>
    );
};

export default MyToysRow;