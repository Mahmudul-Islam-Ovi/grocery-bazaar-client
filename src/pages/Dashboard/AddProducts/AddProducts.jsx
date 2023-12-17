import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import { IoMdAddCircle } from "react-icons/io";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_token = import.meta.env.VITE_Image_Upload_Key;

const AddProducts = () => {
  const [axiosSecure] = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();

  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${image_token}`;

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);
    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          const imageUrl = result.data.display_url;
          const { name, price, category, description } = data;
          const productData = {
            name,
            price: parseFloat(price),
            category,
            description,
            image: imageUrl,
          };
          axiosSecure.post("/products", productData).then((data) => {
            if (data.data.insertedId) {
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Products add successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div className="w-full">
      <Helmet>
        <title>Grocery | Add Products</title>
      </Helmet>
      <SectionTitle
        subHeading={"Add product"}
        heading={"Add product"}
      ></SectionTitle>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-10 border-2 rounded-lg border-blue-500 m-10 "
      >
        <div className="">
          <label className="form-control w-full  mb-5">
            <div className="label">
              <span className="label-text font-bold">
                Products Name{" "}
                <span className="text-red-500 font-bold "> *</span>
              </span>
            </div>
            <input
              {...register("name", { required: true, maxLength: 50 })}
              type="text"
              placeholder=" Products Name"
              className="input input-bordered w-full "
            />
          </label>
        </div>
        <div className="flex gap-10 mb-5">
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text font-bold">
                Category <span className="text-red-500 font-bold "> *</span>
              </span>
            </div>
            <select
              defaultValue={"Select category"}
              {...register("category", {
                required: true,
              })}
              className="select select-bordered"
            >
              <option disabled>Select category</option>
              <option>Dairy and Eggs</option>
              <option>Bakery</option>
              <option>Meat and Seafood</option>
              <option>Frozen Foods</option>
              <option>Grains and Pasta</option>
              <option>Snacks</option>
              <option>Beverages</option>
              <option>Bakery</option>
              <option>Organic and Health Foods</option>
              <option>Baby and Infant Products</option>
              <option>Popular</option>
              <option>Offered</option>
            </select>
          </label>

          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text font-bold">
                Price <span className="text-red-500 font-bold "> *</span>
              </span>
            </div>
            <input
              {...register("price", {
                required: true,
                maxLength: 5,
              })}
              type="number"
              placeholder="Price"
              className="input input-bordered w-full "
            />
          </label>
        </div>

        <div className="">
          <label className="form-control w-full mb-5">
            <div className="label">
              <span className="label-text font-bold">
                Products Description
                <span className="text-red-500 font-bold "> *</span>
              </span>
            </div>
            <textarea
              {...register("description", {
                required: true,
                maxLength: 150,
              })}
              className="textarea textarea-bordered h-24"
              placeholder="Products Details"
            ></textarea>
          </label>
        </div>
        <div className="flex justify-center">
          <label className="form-control w-full my-4 ">
            <div className="label font-bold">
              <span className="label-text">Products Image</span>
            </div>
            <input
              {...register("image", {
                required: true,
              })}
              type="file"
              className="file-input file-input-bordered w-full "
            />
          </label>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="btn  btn-outline bg-amber-500 border-0 border-[#6906bb] border-b-4 mt-5"
          >
            <IoMdAddCircle />
            Add Products
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProducts;
