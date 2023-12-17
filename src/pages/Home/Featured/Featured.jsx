import SectionTitle from "./../../../component/SectionTitle/SectionTitle";
import featuredImage from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-items bg-fixed my-20 pt-10 text-white">
      <section>
        <SectionTitle
          heading={"Featured"}
          subHeading={"Our Featured Items"}
        ></SectionTitle>

        <div className="md:flex justify-center bg-slate-500 bg-opacity-40 items-center pb-20 py-12 px-36">
          <div>
            <img src={featuredImage} alt="" />
          </div>
          <div className="md:ml-10 ">
            <p>November 10,2023</p>
            <p className="uppercase">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
              sint. Illum, dolore soluta vitae ex sit necessitatibus porro
              laudantium. Culpa.dolore soluta vitae ex sit necessitatibus porro
              laudantium. Culpa.dolore soluta vitae ex sit necessitatibus porro
              laudantium. Culpa.
            </p>
            <button className="btn btn-outline border-0 border-b-4 mt-5">Read More</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Featured;
