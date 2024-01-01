import { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../../hooks/useCart";

const ProductsCard = ({ product }) => {
  const { user } = useContext(AuthContext);
  const { refetch } = useCart();

  const location = useLocation();
  const { _id, name, recipe, image, price, category } = product;
  const navigate = useNavigate();
  const handleAddToCart = (item) => {
    console.log(item);
    if (user && user.email) {
      const cartItem = {
        itemId: _id,
        name,
        image,
        price,
        category,
        email: user.email,
      };
      const url = `http://localhost:5000/carts`;
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          refetch(); // refetching the cart and update the cart
          if (data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Add to cart successfully",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "You can't add to cart",
        text: "Please Login First",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login ",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image} alt="image" className="rounded-xl" />
        </figure>
        <p className="bg-slate-900 mr-10 mt-10 px-4 py-1 rounded font-semibold text-white absolute right-0 ">
          ${price}
        </p>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>

          <div className="card-actions">
            <button
              onClick={() => handleAddToCart(product)}
              className="btn btn-outline bg-slate-200 border-0 border-[#BB8506] border-b-4 mt-5"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
