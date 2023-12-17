import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import MenuItems from "../../Shared/MenuItems/MenuItems";

import useData from "../../../hooks/useData";
import { Link } from "react-router-dom";

const PopularItems = () => {
  const [menu] = useData();
  const popular = menu.filter((item) => item.category === "popular");
  return (
    <div className="mb-12">
      <section>
        <SectionTitle
          heading={"Popular Items"}
          subHeading={"Check out our most popular items"}
        ></SectionTitle>
      </section>

      <div className="grid md:grid-cols-2 gap-10 p-5 ">
        {popular.map((item) => (
          <MenuItems key={item._id} item={item}></MenuItems>
        ))}
      </div>
      <div className="flex justify-center">
        <Link
          to={"/order/salad"}
          className="btn btn-outline bg-red-100 border-0 border-b-4 mt-5"
        >
          View All Products
        </Link>
      </div>
    </div>
  );
};

export default PopularItems;
