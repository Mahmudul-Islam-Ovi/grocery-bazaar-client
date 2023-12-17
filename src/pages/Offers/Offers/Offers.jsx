import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import coverImage from "../../../assets/menu/banner3.jpg";
import coverImage2 from "../../../assets/menu/dessert-bg.jpeg";
import coverImage3 from "../../../assets/menu/pizza-bg.jpg";
import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import OfferCategory from "../OfferCategory/OfferCategory";
import useData from "../../../hooks/useData";

const Offers = () => {
  const [menuData] = useData();
  const dessert = menuData.filter((item) => item.category === "dessert");
  const pizza = menuData.filter((item) => item.category === "pizza");
  const offered = menuData.filter((item) => item.category === "offered");

  return (
    <div className="mb-10">
      <Helmet>
        <title>Grocery | Offers</title>
      </Helmet>
      <Cover
        image={coverImage}
        title={"Our Offer"}
        description={"Pls visit our offer page"}
      ></Cover>
      <SectionTitle
        subHeading={"Dont miss our special offers"}
        heading={"Our Offer"}
      ></SectionTitle>
      <OfferCategory items={offered}></OfferCategory>
      <OfferCategory
        items={dessert}
        title={"dessert"}
        coverImg={coverImage2}
      ></OfferCategory>
      <OfferCategory
        items={pizza}
        title={"pizza"}
        coverImg={coverImage3}
      ></OfferCategory>
    </div>
  );
};

export default Offers;
