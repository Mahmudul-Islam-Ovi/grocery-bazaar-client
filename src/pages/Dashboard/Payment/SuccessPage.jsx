import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const SuccessPage = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  const transactionId = query.get("transactionId");

  const [order, setOrder] = useState({});
  const dateObject = new Date(order.paidAt);
  const formattedDate = dateObject.toLocaleString();
  //const formattedDate = dateObject.toLocaleDateString();

  useEffect(() => {
    fetch(`http://localhost:5000/orders/transaction/${transactionId}`)
      .then((res) => res.json())
      .then((data) => {
        setOrder(data);
      });
  }, [transactionId]);

  if (!order?._id) {
    return <div>No order found </div>;
  }

  return (
    <div className="w-full">
      <div className="p-10">
        <div className="flex justify-center items-center">
          <div>
            <div className="mx-auto my-4 max-w-4xl md:my-6">
              <div className="overflow-hidden rounded-xl border border-gray-100 shadow">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  {/* Product List */}
                  <div className="px-5 py-6 md:border-r md:border-r-gray-200 md:px-8">
                    <div className="flow-root">
                      <ul className="-my-7 divide-y divide-gray-200">
                        {order?.orderProduct?.map((product) => (
                          <li
                            key={product._id}
                            className="flex items-stretch justify-between space-x-5 py-7"
                          >
                            <div className="flex flex-1 items-stretch">
                              <div className="flex-shrink-0">
                                <img
                                  className="h-20 w-20 rounded-lg border border-gray-200 object-contain"
                                  src={product.image}
                                  alt={product.image}
                                />
                              </div>

                              <div className="ml-5 flex flex-col justify-between">
                                <div className="flex-1">
                                  <p className="text-sm font-bold text-gray-900">
                                    {product.name}
                                  </p>
                                </div>
                                <p className="mt-4 text-sm font-medium text-gray-500">
                                  x 1
                                </p>
                              </div>
                            </div>
                            <div className="ml-auto flex flex-col items-end justify-between">
                              <p className="text-right text-sm font-bold text-gray-900">
                                {product.price}
                              </p>
                            </div>
                          </li>
                        ))}
                      </ul>
                      <hr className="mt-6 border-gray-200" />
                      <ul className="mt-6 space-y-3">
                        <li className="flex items-center justify-between">
                          <p className="text-sm font-medium ">Total</p>
                          <p className="text-sm font-bold ">
                            {order.totalAmount} BDT
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* Contact Info */}
                  <div className="px-5 py-6 md:px-8">
                    <div className="flow-root">
                      <div className="-my-6 divide-y divide-gray-200">
                        <div className="py-6">
                          <h2 className="text-base font-bold text-black">
                            Contact Information
                          </h2>
                          <p className="fontmedium mt-3 text-xs text-gray-700">
                            Order Number : #{order.transactionId}
                          </p>
                          <p className="text-xs font-medium text-gray-700">
                            Date: {formattedDate}
                          </p>
                        </div>
                        <div className="py-6">
                          <h2 className="mb-2 text-base font-bold text-black">
                            Shipping Information
                          </h2>
                          <p className="mt-3 text-xs font-medium text-gray-700">
                            {order.personName}
                          </p>
                          <p className="text-xs font-medium text-gray-700">
                            {order.address}
                          </p>
                          <p className="text-xs font-medium text-gray-700">
                            {order.number}
                          </p>
                        </div>
                        <div className="py-6">
                          <h2 className="text-base font-bold text-black">
                            Payment Information
                          </h2>
                          <p className="mt-3 text-xs font-medium text-gray-700">
                            Transaction Id : {order.transactionId}
                          </p>
                          <p className="text-xs font-medium text-gray-700">
                            Payment By : sslcommerz
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <button
          onClick={() => window.print()}
          className="print:hidden mb-10 relative py-2 px-8 text-black text-base font-bold uppercase rounded-[50px] overflow-hidden bg-amber-500 transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-[50px] hover:before:left-0"
        >
          Print Order
        </button>
      </div>
    </div>
  );
};

export default SuccessPage;
