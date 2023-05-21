import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MyToysRow from "./MyToysRow";
import Swal from "sweetalert2";
import useTitle from "../../../Hooks/Hooks";

const MyToys = () => {
  useTitle("MyToys")
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [toysPerPage, setToysPerPage] = useState(5);
  const [totalToys, setTotalToys] = useState(0);
  const [sortField, setSortField] = useState("price");
  const [sortOrder, setSortOrder] = useState("asc");

  const totalPages = Math.ceil(totalToys / toysPerPage);
  const pageNumbers = [...Array(totalPages).keys()];

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `http://localhost:5000/myToys/${user?.email}?page=${currentPage}&limit=${toysPerPage}`
      );
      const data = await response.json();
      setToys(data.toys);
      setTotalToys(data.totalToys);
    }
    fetchData();
  }, [currentPage, toysPerPage]);

  const options = [5, 10, 20];
  function handleSelectChange(event) {
    setToysPerPage(parseInt(event.target.value));
    setCurrentPage(0);
  }

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/deleteToy/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your Information has been deleted.",
                "success"
              );
            }
            const remaining = toys.filter((toy) => toy._id !== _id);
            setToys(remaining);
          });
      }
    });
  };

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `http://localhost:5000/myToys/${user?.email}?page=${currentPage}&limit=${toysPerPage}&sortField=${sortField}&sortOrder=${sortOrder}`
      );
      const data = await response.json();
      setToys(data.toys);
      setTotalToys(data.totalToys);
    }
    fetchData();
  }, [currentPage, toysPerPage, sortField, sortOrder, user]);

  const handleSort = (field) => {
    if (field === sortField) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
    setCurrentPage(0);
  };

  console.log(toys);
  return (
    <div className="container mx-auto mt-5">
      <div className="overflow-x-auto w-full">
        <div className="text-center mb-5" onClick={() => handleSort("price")}>
          <div className="btn-group">
            {sortField === "price" && (
              <div>
                {sortOrder === "asc" ? (
                  <>
                    <button className="btn btn-primary font-bold text-white">
                      Sorted
                    </button>
                    <button className="btn btn-secondary font-bold text-white">
                      Unsorted
                    </button>
                  </>
                ) : (
                  <>
                    {" "}
                    <button className="btn btn-secondary font-bold text-white">
                      Sorted
                    </button>
                    <button className="btn btn-primary font-bold text-white">
                      Unsorted
                    </button>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
        <table className="table table-zebra w-full">
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
              <th>Description</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {toys.map((toy, idx) => (
              <MyToysRow
                key={toy._id}
                toy={toy}
                index={idx}
                handleDelete={handleDelete}
              ></MyToysRow>
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
                className={`btn ${
                  currentPage === number
                    ? "btn-active"
                    : "bg-[#EEEEEE] border border-2"
                } me-3 font-bold`}
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
