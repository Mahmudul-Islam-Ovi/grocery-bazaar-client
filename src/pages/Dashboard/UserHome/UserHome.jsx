import { Helmet } from "react-helmet-async";
import useAuth from "../../../hooks/useAuth";

const UserHome = () => {
  const { user } = useAuth();
  return (
    <div className="w-full">
      <Helmet>
        <title>Grocery | Users Home</title>
      </Helmet>
      <h1 className="text-3xl font-bold ml-10">Hi, {user.displayName}</h1>
    </div>
  );
};

export default UserHome;
