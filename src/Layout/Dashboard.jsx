import { NavLink, Outlet } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa6";
import { GoCodeReview } from "react-icons/go";
import { FaWallet } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import { MdLocalOffer } from "react-icons/md";
import { RiContactsBookLine } from "react-icons/ri";
import { FaBasketShopping } from "react-icons/fa6";
import UseAdmin from "../hooks/UseAdmin";
const Dashboard = () => {
  const [isAdmin] = UseAdmin();
  return (
    <div>
      <div className="drawer lg:drawer-open ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-ghost bg-accent  mt-5 drawer-button lg:hidden"
          >
            Open drawer
          </label>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full text-white bg-[#D1a054]">
            {/* Sidebar content here */}

            {isAdmin ? (
              <>
                <li>
                  <NavLink to="/dashboard/adminHome">
                    <IoHome />
                    Admin Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/addProducts">
                    <FaBasketShopping />
                    Add Products
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manage">
                    <MdLocalOffer />
                    Manage Product
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/allUsers">
                    <RiContactsBookLine />
                    All Users
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/order">
                    <RiContactsBookLine />
                    Order
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/dashboard/myCart">
                    <FaCartPlus />
                    My Cart
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/review">
                    <GoCodeReview />
                    Add Review
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/calendar">
                    <FaCalendarDays />
                    Calendar
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/payment">
                    <FaWallet />
                    Payment History
                  </NavLink>
                </li>
              </>
            )}

            <div className="divider"></div>
            <li>
              <NavLink to="/dashboard/userHome">
                <IoHome />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/order/salad">
                <FaBasketShopping />
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink to="/offer">
                <MdLocalOffer />
                Offer
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact">
                <RiContactsBookLine />
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
