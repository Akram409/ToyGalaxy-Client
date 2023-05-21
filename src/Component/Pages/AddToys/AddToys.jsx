import { useState } from "react";
import { useForm } from "react-hook-form";
import CreatableSelect from "react-select/creatable";
import { toast } from "react-toastify";
import useTitle from "../../../Hooks/Hooks";

const AddToys = () => {
  useTitle('Add Toys')
  const [selectedOption, setSelectedOption] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.category_name = selectedOption.value;

    fetch("https://toy-factory-server-akram409.vercel.app/addToys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success("Toy Added Successfully!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      });
  };

  const options = [
    { value: "Marvel", label: "Marvel" },
    { value: "Avenger", label: "Avenger" },
    { value: "StarWar", label: "StarWar" },
    { value: "Transformer", label: "Transformer" },
  ];

  return (
    <div className="container mx-auto mt-4 bg-[#4a3da7] card shadow-2xl ">
      <h1 className="text-5xl font-bold pt-3 text-center text-white">
        Add Toy
      </h1>
      <div className="card-body">
        <form onSubmit={handleSubmit(onSubmit)}>
          {errors.exampleRequired && <span>This field is required</span>}
          <div className="space-y-10 text-center">
            <div className="flex gap-2">
              <input
                type="text"
                className="input input-bordered input-primary w-full "
                {...register("img")}
                placeholder="Picture Url"
                defaultValue=""
              />

              <input
                type="text"
                className="input input-bordered input-primary w-full "
                {...register("name", { required: true })}
                placeholder="Toy Name"
                defaultValue=""
              />

              <CreatableSelect
                className="w-2/3"
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
              />
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                className="input input-bordered input-primary w-full "
                {...register("seller")}
                placeholder="Seller"
                defaultValue=""
              />

              <input
                type="email"
                className="input input-bordered input-primary w-full "
                {...register("seller_email")}
                placeholder="Email"
                defaultValue=""
              />
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                id="FirstInput"
                className="input input-bordered input-primary w-full "
                {...register("price", { required: true })}
                placeholder="Price"
                defaultValue=""
              />

              <input
                type="text"
                id="FirstInput"
                className="input input-bordered input-primary w-full "
                {...register("rating", { required: true })}
                placeholder="Rating"
                defaultValue=""
              />

              <input
                type="number"
                id="FirstInput"
                className="input input-bordered input-primary w-full "
                {...register("quantity", { required: true })}
                placeholder="Quantity"
                defaultValue=""
              />
            </div>

            <div>
              <textarea
                className="textarea  textarea-primary w-full"
                {...register("description")}
                placeholder="Description"
              ></textarea>
            </div>

            <input
              className="btn bg-[#a3e635] font-bold text-black"
              value="ADD TOY"
              type="submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddToys;
