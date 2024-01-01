import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import { useState } from "react";
import { BaseUrl } from "../../../component/BaseUrl/BaseUrl";

const OrderProducts = () => {
  const [isConfirmed, setConfirmed] = useState(false);
  const {
    isPending,
    isError,
    data: order = [],
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch(`${BaseUrl}/orders`);
      return res.json();
    },
  });
  if (isPending) {
    return (
      <div>
        <span className="loading loading-ring loading-xs"></span>
        <span className="loading loading-ring loading-sm"></span>
        <span className="loading loading-ring loading-md"></span>
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  const handleConfirmClick = () => {
    // Toggle the state to switch between confirmed and not confirmed
    setConfirmed((prevState) => !prevState);
  };
  return (
    <div className="w-full ">
      <Helmet>
        <title>Grocery | Orders</title>
      </Helmet>
      <SectionTitle
        heading={"Order Details Customer"}
        subHeading={""}
      ></SectionTitle>
      <div className="text-3xl font-bold m-10">
        The total order is : {order.length}
      </div>
      <div className="flex flex-wrap gap-10 ml-10 mb-32">
        {order?.map((or) => (
          <div key={or._id}>
            <div className="w-[400px] rounded-md border  ">
              <div className="p-4">
                <h1 className="text-lg font-semibold">
                  Name :
                  <span className="font-bold text-red-600">
                    {or?.personName}
                  </span>
                </h1>
                <h1 className="text-lg font-semibold">
                  Address :{" "}
                  <span className="font-bold text-amber-500">
                    {or?.address}
                  </span>
                </h1>
                <h1 className="text-lg font-semibold">
                  Number :{" "}
                  <span className="font-bold text-blue-600">{or?.number}</span>
                </h1>
                <h1 className="text-lg font-semibold">
                  Email :{" "}
                  <span className="font-bold text-blue-600">{or?.email}</span>
                </h1>
                <h1 className="text-lg font-bold">Order Products</h1>
                <div>
                  <ol type="A">
                    {or?.orderProduct?.map((product) => (
                      <li key={product._id}>{product.name}</li>
                    ))}
                  </ol>
                </div>
                <h1 className="font-bold">
                  Total Price :{" "}
                  <span className="text-pink-700"> {or?.totalAmount}</span>
                </h1>
                <button
                  onClick={handleConfirmClick}
                  type="button"
                  className="mt-4 rounded-lg bg-black px-2.5 py-2 text-[15px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  {isConfirmed ? "Confirmed" : "Confirm Delivery"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderProducts;
