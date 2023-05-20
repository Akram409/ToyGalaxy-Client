import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import AllToysRow from "./AllToysRow";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [findText, setFindText] = useState(" ");

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
          console.log(data);
          setToys(data);
        });
    } else {
      fetch("http://localhost:5000/allToys")
        .then((res) => res.json())
        .then((data) => setToys(data));
    }
  };

  console.log(toys);
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
        <CiSearch onClick={handleSearchbtn} size="2em"/>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table table-zebra w-full">
          {/* head */}
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
    </div>
  );
};

export default AllToys;
