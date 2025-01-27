import Cover from "../../../shares/Cover/Cover";
import orderImg from "../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "../../../Hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";

const Order = () => {
    const categories = ['salad','pizza','soup','desserts','drinks','offered'];
    const {category} = useParams()
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [refetch,menus,loading,isError] = useMenu();
    const desserts = menus?.filter((item) => item?.category === "dessert");
  const salad = menus?.filter((item) => item?.category === "salad");
  const pizza = menus?.filter((item) => item?.category === "pizza");
  const soup = menus?.filter((item) => item?.category === "soup");
  const offered = menus?.filter((item) => item?.category === "offered");
  const drinks = menus?.filter((item) => item?.category === "drinks");
  
  console.log(category)

  return (
    <div className="">
      <Cover
        img={orderImg}
        title={"OUR SHOP"}
        text={"WOULD YOU LIKE TO TRY A DISH?"}
      ></Cover>
      <Tabs className=" p-5 lg:p-20 text-center" selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList className="bg-yellow-400 border-none mb-2 text-black max-w-max mx-auto " >
          <Tab>salad</Tab>
          <Tab>pizza</Tab>
          <Tab>soup</Tab>
          <Tab>desserts</Tab>
          <Tab>drinks</Tab>
          <Tab>offered</Tab>
        </TabList>
        <TabPanel>
            <OrderTab loading={loading} isError={isError} items={salad}></OrderTab>
        </TabPanel>
        <TabPanel>
        <OrderTab  loading={loading} isError={isError} items={pizza}></OrderTab>
        </TabPanel>
        <TabPanel>
        <OrderTab  loading={loading} isError={isError} items={soup}></OrderTab>
        </TabPanel>
        <TabPanel>
        <OrderTab  loading={loading} isError={isError} items={offered}></OrderTab>
        </TabPanel>
        <TabPanel>
        <OrderTab  loading={loading} isError={isError} items={desserts}></OrderTab>
        </TabPanel>
        <TabPanel>
        <OrderTab  loading={loading} isError={isError} items={drinks}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
