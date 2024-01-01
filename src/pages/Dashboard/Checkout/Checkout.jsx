import { Home, ChevronRight, ShoppingCart } from "lucide-react";
import useCart from "../../../hooks/useCart";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import useAuth from "../../../hooks/useAuth";

const steps = ["Checkout", "Personal Information", "Confirmation"];
const Checkout = () => {
  const { user } = useAuth();
  const { cart, total } = useCart();
  const [axiosSecure] = useAxiosSecure();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You Confirm to order this ",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Confirm it",
    }).then((result) => {
      if (result.isConfirmed) {
        // upload server code
        const { name, number, address } = data;
        const orderData = {
          personName: name,
          number,
          address,
          email: user?.email || "unregistered",
          orderProduct: cart,
          totalAmount: total + 120,
        };
        axiosSecure.post("/orders", orderData).then((data) => {
          window.location.replace(data.data.url);
        });
      }
    });
  };
  return (
    <div className="w-full">
      <Helmet>
        <title>Grocery | Check Out</title>
      </Helmet>
      <div className="mx-auto w-full max-w-7xl  lg:p-0 p-5">
        <div className="mx-auto my-4 max-w-2xl md:my-6">
          {/* breadcrumb */}
          <nav className="mb-8 flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <a
                  href="#"
                  className="ml-1 inline-flex text-sm font-medium text-gray-900 hover:underline md:ml-2"
                >
                  <Home size={16} className="mr-2 text-gray-900" />
                  Cart
                </a>
              </li>
              {steps.map((step) => (
                <li key={step}>
                  <div className="flex items-center">
                    <ChevronRight size={16} className="mr-2 text-gray-600" />
                    <a
                      href="#"
                      className="ml-1 text-sm font-medium text-gray-900 hover:underline md:ml-2"
                    >
                      {step}
                    </a>
                  </div>
                </li>
              ))}
            </ol>
          </nav>
          {/* Form */}

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="overflow-hidden rounded-xl bg-white p-4 shadow">
              <div className="mb-4 flex items-center rounded-lg py-2">
                <div className="mr-2 rounded-full bg-gray-100  p-2 text-black">
                  <ShoppingCart size={20} />
                </div>
                <div className="flex flex-1">
                  <p className="text-sm font-medium">
                    You have <strong>{cart?.length}</strong> items in cart. Sub
                    total is <strong>{total + 120} BDT</strong>
                  </p>
                </div>
                <Link
                  to={"/dashboard/myCart"}
                  className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  View Items
                </Link>
              </div>
              <p className="text-sm font-bold text-gray-900">Personal Info</p>
              <div className="mt-6 gap-6 space-y-4 md:grid md:grid-cols-2 md:space-y-0">
                <div className="w-full">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="firstName"
                  >
                    Name
                  </label>
                  <input
                    {...register("name", {
                      required: true,
                    })}
                    className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="Enter your  name"
                  ></input>
                </div>

                <div className="w-full">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Mobile Number
                  </label>
                  <input
                    {...register("number", {
                      required: true,
                    })}
                    className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="number"
                    placeholder="+880"
                  ></input>
                </div>
                <div className="col-span-2 grid">
                  <div className="w-full">
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Address
                    </label>
                    <textarea
                      {...register("address", {
                        required: true,
                        maxLength: 150,
                      })}
                      className="flex textarea h-24 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      placeholder="Enter your  Address"
                    ></textarea>
                  </div>
                </div>

                <div className="col-span-2 grid">
                  <button
                    type="submit"
                    className="w-full text-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Confirm To Pay
                  </button>
                  {/* <Link
                    to={"/dashboard/confirmation"}
                    type="submit"
                    className="w-full text-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Proceed to Payment
                  </Link> */}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
