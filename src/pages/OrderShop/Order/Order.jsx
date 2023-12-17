import orderCover from "../../../assets/shop/banner2.jpg";
import Cover from "./../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import useData from "../../../hooks/useData";

const Order = () => {
  const catagories = ["salad", "pizza", "dessert", "drinks", "soup"];
  const { category } = useParams();
  const intialIndex = catagories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(intialIndex);
  const [menuData] = useData();

  const dessert = menuData.filter((item) => item.category === "dessert");
  const pizza = menuData.filter((item) => item.category === "pizza");
  const soup = menuData.filter((item) => item.category === "soup");
  const salad = menuData.filter((item) => item.category === "salad");
  const drinks = menuData.filter((item) => item.category === "drinks");
  return (
    <div className="mb-20">
      <Helmet>
        <title>Grocery | Shop</title>
      </Helmet>
      <Cover
        image={orderCover}
        title={"Our Shop"}
        description={"Order description"}
      ></Cover>
      <div className="mt-10 ">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>SALAD</Tab>
            <Tab>PIZZA</Tab>
            <Tab>DESSERT</Tab>
            <Tab>DRINKS</Tab>
            <Tab>SOUP</Tab>
          </TabList>
          <TabPanel>
            <OrderTab items={salad}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={pizza}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={dessert}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={drinks}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={soup}></OrderTab>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
