import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";
import { Trash } from "lucide-react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyCart = () => {
  const { cart, total, refetch } = useCart();
  //   console.log(cart);
  //   const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleDelete = (product) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You Remove this product from your cart!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://grocery-bazaar-server.vercel.app/carts/${product._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire(
                "Removed!",
                "Your products has been Removed",
                "success"
              );
            } else {
              Swal.fire("Failed!", "Something went wrong.", "error");
            }
          });
      }
    });
  };
  return (
    <div>
      <Helmet>
        <title>Grocery | My Cart</title>
      </Helmet>
      <div className="flex gap-20 flex-col lg:flex-row">
        <div className="mx-auto lg:w-[500px] w-[400px] flex max-w-3xl flex-col space-y-4 p-6 px-2 sm:p-10 sm:px-2">
          <h2 className="text-3xl font-bold">Total Items : {cart?.length}</h2>
          <ul className="flex flex-col divide-y divide-gray-200">
            {cart?.map((product) => (
              <li
                key={product._id}
                className="flex flex-col py-6 sm:flex-row sm:justify-between"
              >
                <div className="flex w-full space-x-2 sm:space-x-4">
                  <img
                    className="h-24 w-20 flex-shrink-0 rounded object-contain outline-none dark:border-transparent sm:h-32 sm:w-32"
                    src={product.image}
                    alt={product.name}
                  />
                  <div className="flex w-full flex-col justify-between pb-4">
                    <div className="flex w-full justify-between space-x-2 pb-2">
                      <div className="lg:mt-6 mt-5">
                        <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                          {product.name}
                        </h3>
                      </div>
                      <div className="text-right mt-5">
                        <p className="text-lg font-semibold">{product.price}</p>
                      </div>
                    </div>
                    <div className="flex divide-x text-sm">
                      <button
                        onClick={() => handleDelete(product)}
                        type="button"
                        className="flex items-center space-x-2 px-2 py-1 pl-0"
                      >
                        <Trash size={16} />
                        <span>Remove</span>
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="divider lg:divider-horizontal"></div>
        {/* Order summary */}
        <section
          aria-labelledby="summary-heading"
          className=" mb-10  md:w-[350px] rounded-md bg-white lg:col-span-4 lg:mt-0 lg:p-0"
        >
          <h2
            id="summary-heading"
            className=" border-b border-gray-200 px-4 py-3 text-lg font-medium text-gray-900 sm:p-4"
          >
            Price Details
          </h2>
          <div>
            <dl className=" space-y-1 px-2 py-4">
              <div className="flex items-center justify-between">
                <dt className="text-sm text-gray-800">
                  Price ( {cart?.length} items )
                </dt>
                <dd className="text-sm font-medium text-gray-900">₹ {total}</dd>
              </div>
              <div className="flex items-center justify-between pt-4">
                <dt className="flex items-center text-sm text-gray-800">
                  <span>Discount</span>
                </dt>
                <dd className="text-sm font-medium text-green-700">- ₹ 0</dd>
              </div>
              <div className="flex items-center justify-between py-4">
                <span>Delivery Charges</span>

                <dd className="text-sm font-medium text-green-700">120</dd>
              </div>
              <div className="flex text-sm items-center justify-between ">
                ( Only inside Dhaka )
              </div>
              <div className="flex items-center justify-between border-y border-dashed py-4 ">
                <dt className="text-base font-medium text-gray-900">
                  Total Amount
                </dt>
                <dd className="text-base font-medium text-gray-900">
                  ₹ {total + 120}
                </dd>
              </div>
            </dl>
          </div>
          <div className="flex justify-end space-x-4">
            <Link
              to="/order/salad"
              type="button"
              className="rounded-md  btn-outline hover:bg-accent border border-amber-500 px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Back to shop
            </Link>
            <Link
              to="/dashboard/checkout"
              type="button"
              className="rounded-md btn-outline hover:bg-amber-400 border border-red-500 px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Checkout
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MyCart;
