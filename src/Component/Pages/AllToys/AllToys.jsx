import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import AllToysRow from "./AllToysRow";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../../Hooks/Hooks";

const AllToys = () => {
  useTitle('All Toys')
  const [toys, setToys] = useState([]);
  const [findText, setFindText] = useState(" ");
  const [currentPage, setCurrentPage] = useState(0);
  const [toysPerPage, setToysPerPage] = useState(20);
  const { totalToys } = useLoaderData();

  const totalPages = Math.ceil(totalToys / toysPerPage);
  const pageNumbers = [...Array(totalPages).keys()];

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `http://localhost:5000/allToys?page=${currentPage}&limit=${toysPerPage}`
      );
      const data = await response.json();
      setToys(data);
    }
    fetchData();
  }, [currentPage, toysPerPage]);

  const options = [5, 10, 15, 20 , 30];
  function handleSelectChange(event) {
    setToysPerPage(parseInt(event.target.value));
    setCurrentPage(0);
  }

  useEffect(() => {
    fetch("http://localhost:5000/allToys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  const handleSearchbtn = () => {
    if (findText !== "") {
      fetch(`http://localhost:5000/searchToyByToySeller/${findText}`)
        .then((res) => res.json())
        .then((data) => {
          setToys(data);
        });
    } else {
      fetch("http://localhost:5000/allToys")
        .then((res) => res.json())
        .then((data) => setToys(data));
    }
  };

  return (
    <div className="container mx-auto mt-5">
      <div className="flex justify-center gap-2 items-center mb-5">
        <div>
          <input
            onChange={(ev) => setFindText(ev.target.value)}
            type="text"
            placeholder="Search here....."
            className="input input-bordered input-accent w-full max-w-xs"
          />
        </div>
        <CiSearch cursor="pointer" onClick={handleSearchbtn} size="2em" />
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table table-zebra w-full">
          <thead>
            <tr className="text-center">
              <th>SL.</th>
              <th>Picture</th>
              <th>ToyName</th>
              <th>Seller</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {toys.map((toy, idx) => (
              <AllToysRow key={toy._id} toy={toy} index={idx}></AllToysRow>
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

export default AllToys;
