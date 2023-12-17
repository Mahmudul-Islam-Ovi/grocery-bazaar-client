import useAuth from "../../../hooks/useAuth";
import { Helmet } from "react-helmet-async";

const AdminHome = () => {
  const { user } = useAuth();
  return (
    <div className="w-full">
      <Helmet>
        <title>Grocery | Admin Home</title>
      </Helmet>
      <h1 className="text-3xl font-bold ml-10">Hi, {user.displayName}</h1>
    </div>
  );
};

export default AdminHome;
