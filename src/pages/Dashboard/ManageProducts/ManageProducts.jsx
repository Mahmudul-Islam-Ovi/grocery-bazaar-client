import { Link } from "react-router-dom";
import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import useProducts from "../../../hooks/useProducts";
import { Trash } from "lucide-react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const ManageProducts = () => {
  const { products, refetch } = useProducts();
  const [axiosSecure] = useAxiosSecure();

  const handleDelete = (product) => {
    Swal.fire({
      title: "Are you sure?",
      text: `Delete ${product.name}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/products/${product._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire(
              "Deleted!",
              `${product.name} has been deleted`,
              "success"
            );
          }
        });
      }
    });
  };
  return (
    <div className="w-full">
      <Helmet>
        <title>Grocery | Manage Products</title>
      </Helmet>
      <SectionTitle
        heading={"Manage all products"}
        subHeading={"Manage all products"}
      ></SectionTitle>
      <div>
        <>
          <section className="mx-auto w-full max-w-7xl px-4 py-4">
            <div className="flex flex-col space-y-4  md:flex-row md:items-center md:justify-between md:space-y-0">
              <div>
                <h2 className="text-lg font-semibold">
                  ALL Products : {products?.length}
                </h2>
              </div>
              <div>
                <Link
                  to={"/dashboard/addProducts"}
                  type="button"
                  className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Add new Products
                </Link>
              </div>
            </div>
            <div className="mt-6 flex flex-col">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                  <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="px-4 py-3.5 text-left text-sm font-bold text-gray-700"
                          >
                            <span>Product</span>
                          </th>
                          <th
                            scope="col"
                            className="px-12 py-3.5 text-left text-sm font-bold text-gray-700"
                          >
                            Category
                          </th>

                          <th
                            scope="col"
                            className="px-4 py-3.5 text-left text-sm font-bold text-gray-700"
                          >
                            Price
                          </th>

                          <th
                            scope="col"
                            className="px-4 py-3.5 text-left text-sm font-bold text-gray-700"
                          >
                            Delete
                          </th>
                          <th scope="col" className="relative px-4 py-3.5">
                            <span className="sr-only">Edit</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 bg-white">
                        {products?.map((product) => (
                          <tr key={product._id}>
                            <td className="whitespace-nowrap px-4 py-4">
                              <div className="flex items-center">
                                <div className="h-10 w-10 flex-shrink-0">
                                  <img
                                    className="h-10 w-10 rounded-full object-cover"
                                    src={product.image}
                                    alt=""
                                  />
                                </div>
                                <div className="ml-4">
                                  <div className="text-sm font-medium text-gray-900">
                                    {product.name}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="whitespace-nowrap px-12 py-4">
                              <div className="text-sm text-gray-900 ">
                                {product.category}
                              </div>
                            </td>
                            <td className="whitespace-nowrap px-4 py-4">
                              <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                                {product.price}
                              </span>
                            </td>
                            <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                              <button
                                onClick={() => handleDelete(product)}
                                className="text-gray-700"
                              >
                                <Trash size={20} />
                              </button>
                            </td>
                            <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                              <Link to={"/"} className="text-gray-700">
                                Edit
                              </Link>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center pt-6">
              <a
                href="#"
                className="mx-1 cursor-not-allowed text-sm font-semibold text-gray-900"
              >
                <span className="hidden lg:block">&larr; Previous</span>
                <span className="block lg:hidden">&larr;</span>
              </a>
              <a
                href="#"
                className="mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105"
              >
                1
              </a>
              <a
                href="#"
                className="mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105"
              >
                2
              </a>
              <a
                href="#"
                className="mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105"
              >
                3
              </a>
              <a
                href="#"
                className="mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105"
              >
                4
              </a>
              <a href="#" className="mx-2 text-sm font-semibold text-gray-900">
                <span className="hidden lg:block">Next &rarr;</span>
                <span className="block lg:hidden">&rarr;</span>
              </a>
            </div>
          </section>
        </>
      </div>
    </div>
  );
};

export default ManageProducts;
