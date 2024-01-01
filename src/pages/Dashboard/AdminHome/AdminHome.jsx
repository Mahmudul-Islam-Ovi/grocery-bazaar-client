import useAuth from "../../../hooks/useAuth";
import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AdminHome = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: status = {} } = useQuery({
    queryKey: "admin-status",
    queryFn: async () => {
      const res = await axiosSecure.get(`/admin-status`);
      return res.data;
    },
  });
  return (
    <div className="w-full">
      <Helmet>
        <title>Grocery | Admin Home</title>
      </Helmet>
      <h1 className="text-3xl text-center font-bold ml-10">
        Hi, {user.displayName}
      </h1>
      <div className="flex  justify-center mt-5">
        <div className="stats shadow ">
          <div className="stat lg:p-16 bg-amber-700 text-white">
            <div className="stat-figure text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <div className="stat-title lg:text-3xl font-bold lg:-mt-10 text-white">
              Orders
            </div>
            <div className="stat-value">{status.orders}</div>
            {/* <div className="stat-desc">Jan 1st - Feb 1st</div> */}
          </div>

          <div className="stat lg:p-16 bg-green-700 text-white">
            <div className="stat-figure  text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                ></path>
              </svg>
            </div>
            <div className="stat-title  lg:text-3xl font-bold lg:-mt-10 text-white">
              Users
            </div>
            <div className="stat-value text-white">{status.users}</div>
            {/* <div className="stat-desc">↗︎ 400 (22%)</div> */}
          </div>

          <div className="stat lg:p-16 bg-blue-800">
            <div className="stat-figure text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                ></path>
              </svg>
            </div>
            <div className="stat-title  lg:text-3xl font-bold lg:-mt-10 text-white">
              Products
            </div>
            <div className="stat-value">{status.products}</div>
            {/* <div className="stat-desc">↘︎ 90 (14%)</div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
