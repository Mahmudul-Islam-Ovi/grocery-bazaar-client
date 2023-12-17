import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItems from "../../Shared/MenuItems/MenuItems";

const OfferCategory = ({ items, title, coverImg }) => {
  return (
    <div>
      {title && (
        <Cover
          image={coverImg}
          title={title}
          description={"Pls visit our offer page"}
        ></Cover>
      )}
      <div className="grid md:grid-cols-2 gap-10 p-5  my-16">
        {items.map((item) => (
          <MenuItems key={item._id} item={item}></MenuItems>
        ))}
      </div>
      <div className=" flex justify-center my-10">
        <Link
          to={`/order/${title}`}
          className="btn btn-outline  border-2 border-[#BB8506] border-b-4 mt-5"
        >
          Order Now
        </Link>
      </div>
    </div>
  );
};

export default OfferCategory;
