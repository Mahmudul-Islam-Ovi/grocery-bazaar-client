import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "./../../../hooks/useAuth";
const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from || "/";

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      const user = result.user;
      const saveUser = { name: user.displayName, email: user.email };
      fetch("http://localhost:4000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(saveUser),
      })
        .then((res) => res.json())
        .then(() => {
          navigate(from, { replace: true });
        });
    });
  };
  return (
    <div className=" w-full text-center">
      <div className="divider"></div>
      <button
        onClick={handleGoogleSignIn}
        className="btn btn-circle bg-accent"
        type="button"
      >
        <FaGoogle />
      </button>
    </div>
  );
};

export default SocialLogin;
