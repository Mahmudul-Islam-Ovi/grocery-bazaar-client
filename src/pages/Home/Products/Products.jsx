import ProductsCard from "./ProductsCard";
import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import useData from "../../../hooks/useData";

const Products = () => {
  const [menu] = useData();
  const offeredItems = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <SectionTitle
        subHeading={"Check out our most popular items"}
        heading={"Buy Recommend"}
      ></SectionTitle>
      <div className="grid place-items-center  grid-cols-1 lg:grid-cols-3  md:grid-cols-2 gap-5">
        {offeredItems.map((product) => (
          <ProductsCard key={product._id} product={product}></ProductsCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
