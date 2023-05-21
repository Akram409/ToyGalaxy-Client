import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { CiSearch } from "react-icons/ci";
import MyToysRow from "./MyToysRow";

const MyToys = () => {
    const {user} = useContext(AuthContext)
    const [toys, setToys] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [toysPerPage, setToysPerPage] = useState(5);
    const [totalToys,setTotalToys] = useState(0)

    const totalPages = Math.ceil(totalToys / toysPerPage);
    const pageNumbers = [...Array(totalPages).keys()];

    useEffect(() => {
        async function fetchData() {
          const response = await fetch(
            `http://localhost:5000/myToys/${user?.email}?page=${currentPage}&limit=${toysPerPage}`
          );
          const data = await response.json();
          setToys(data.toys);
          setTotalToys(data.totalToys)
        }
        fetchData();
      }, [currentPage, toysPerPage]);

    const options = [5, 10, 20];
    function handleSelectChange(event) {
      setToysPerPage(parseInt(event.target.value));
      setCurrentPage(0);
    }

    // console.log(toys)
    return (
        <div className="container mx-auto mt-5">
      <div className="overflow-x-auto w-full">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr className="text-center">
              <th>SL.</th>
              <th>Picture</th>
              <th>ToyName</th>
              <th>Seller</th>
              <th>Email</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Quantity</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {toys.map((toy, idx) => (
              <MyToysRow key={toy._id} toy={toy} index={idx}></MyToysRow>
            ))}
          </tbody>
        </table>
      </div>
      {/* pagination */}
      <div className="text-center my-8">
        {pageNumbers.map((number) => (
          <>
            <div className="btn-group">
              <button
                key={number}
                className={`btn ${currentPage === number ? "btn-active" : "bg-[#EEEEEE] border border-2"} me-3 font-bold`}
                onClick={() => setCurrentPage(number)}
              >
                {number + 1}
              </button>
            </div>
          </>
        ))}
        <select value={toysPerPage} onChange={handleSelectChange}>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
    );
};

export default MyToys;