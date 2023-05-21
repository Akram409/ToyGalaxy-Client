import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import CreatableSelect from "react-select/creatable";
import { toast } from "react-toastify";

const UpdateToys = () => {
  const item = useLoaderData();
  const {
    _id,
    category_name,
    img,
    name,
    price,
    rating,
    quantity,
    seller,
    seller_email,
    description,
  } = item;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    fetch(`http://localhost:5000/updateToys/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.matchedCount > 0) {
            toast.success("Toy Details Updated", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });;
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
        Update Toy Details
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
                defaultValue={img}
              />

              <input
                type="text"
                className="input input-bordered input-primary w-full "
                {...register("name", { required: true })}
                placeholder="Toy Name"
                defaultValue={name}
              />
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                className="input input-bordered input-primary w-full "
                {...register("seller")}
                placeholder="Seller"
                defaultValue={seller}
              />

              <input
                type="email"
                className="input input-bordered input-primary w-full "
                {...register("seller_email")}
                placeholder="Email"
                defaultValue={seller_email}
              />
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                id="FirstInput"
                className="input input-bordered input-primary w-full "
                {...register("price", { required: true })}
                placeholder="Price"
                defaultValue={price}
              />

              <input
                type="text"
                id="FirstInput"
                className="input input-bordered input-primary w-full "
                {...register("rating", { required: true })}
                placeholder="Rating"
                defaultValue={rating}
              />

              <input
                type="number"
                id="FirstInput"
                className="input input-bordered input-primary w-full "
                {...register("quantity", { required: true })}
                placeholder="Quantity"
                defaultValue={quantity}
              />
            </div>

            <div>
              <textarea
                className="textarea  textarea-primary w-full"
                {...register("description")}
                placeholder="Description"
                defaultValue={description}
              ></textarea>
            </div>

            <input
              className="btn bg-[#a3e635] font-bold text-black"
              value="UPDATE TOY"
              type="submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateToys;
