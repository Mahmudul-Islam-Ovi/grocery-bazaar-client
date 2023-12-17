import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
import { useContext } from "react";
import useCart from "../../../hooks/useCart";
import UseAdmin from "../../../hooks/UseAdmin";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const { cart } = useCart();
  const [isAdmin] = UseAdmin();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("log out successfull");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const navItems = (
    <>
      <li>
        <NavLink to={"/"}>HOME</NavLink>
      </li>
      <li>
        <NavLink to={"/offer"}>OFFERS</NavLink>
      </li>
      <li>
        <NavLink to={"/order/salad"}>OUR SHOP</NavLink>
      </li>
      <li>
        <NavLink to={"/contact"}>CONTACT US</NavLink>
      </li>
      {user ? (
        <>
          <li>
            <NavLink
              to={isAdmin ? "/dashboard/adminHome" : "/dashboard/userHome"}
            >
              DASHBOARD
            </NavLink>
          </li>
        </>
      ) : (
        <>
          <li></li>
        </>
      )}
      {user ? (
        <>
          <li>
            <p onClick={handleLogOut}>LOG OUT</p>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink to={"/login"}>LOGIN</NavLink>
          </li>
        </>
      )}
      {user ? (
        <>
          <li></li>
        </>
      ) : (
        <>
          <li>
            <NavLink to={"/signUp"}>SIGN UP</NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div>
      <div className="navbar fixed z-10 bg-opacity-50 bg-black text-white max-w-screen-xl">
        <div className="navbar-start">
          <div className="dropdown ">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm bg-black dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <NavLink to="/" className="btn btn-ghost text-xl">
            Grocery-Bazaar
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">
                  {cart?.length || 0}
                </span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="mt-3 z-[1]   dropdown-content w-96 bg-base-200 "
            >
              <div className="">
                <div
                  className="m-auto w-screen max-w-sm rounded-lg border border-gray-200 p-4 pt-4 shadow-sm sm:p-6 lg:p-8"
                  aria-modal="true"
                  role="dialog"
                  tabIndex={-1}
                >
                  <div className="mt-6 space-y-6">
                    <ul className="space-y-4">
                      {cart?.map((product) => (
                        <li
                          key={product._id}
                          className="flex items-center gap-4"
                        >
                          <img
                            src={product.image}
                            alt={product.name}
                            className="h-16 w-16 rounded object-contain"
                          />
                          <div>
                            <h3 className="text-sm text-gray-900">
                              {product.name}
                            </h3>
                            <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                              <div>
                                <dd className="inline font-bold">
                                  {product.price}
                                </dd>
                              </div>
                            </dl>
                          </div>
                        </li>
                      ))}
                    </ul>
                    <div className="space-y-4 text-center">
                      <Link
                        to={"/dashboard/myCart"}
                        type="button"
                        className="w-full rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                      >
                        View Cart ( {cart?.length})
                      </Link>
                      <Link
                        to={"/dashboard/checkout"}
                        type="button"
                        className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                      >
                        Checkout
                      </Link>
                      <Link
                        to={"/order/salad"}
                        href="#"
                        className="inline-block text-sm text-gray-600 transition hover:text-gray-700 hover:underline hover:underline-offset-4"
                      >
                        Continue shopping &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
