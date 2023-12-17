import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularItems from "../PopularItems/PopularItems";
import Products from "../Products/Products";
import Testimonials from "../Testimonials/Testimonials";
import Cover from "../../Shared/Cover/Cover";
import coverImage from "../../../assets/menu/banner3.jpg";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Grocery | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <Cover image={coverImage} title={"Grocery Bazaar"} description={'This is grocery shop'}></Cover>
      <PopularItems></PopularItems>
      <Products></Products>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
