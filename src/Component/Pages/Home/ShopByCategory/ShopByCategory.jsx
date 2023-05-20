import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CategoryCard from "./CategoryCard";

const ShopByCategory = () => {
  const [data, setData] = useState([]);
  const [text, setText] = useState("Marvel");

  const handlTabBtn = (event) => {
    const name = event.target.innerText;
    setText(name);
  };

  useEffect(() => {
    fetch(`http://localhost:5000/shopByCategory/${text}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [text]);

  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (index) => {
    setActiveTab(index);
    console.log(index);
  };

  return (
    <div className="text-center container mx-auto">
      <h1 className="text-5xl font-bold text-center mb-4 text-[#00425A]">
        Shop by Categories
      </h1>
      <div className="divider"></div>
      <Tabs selectedIndex={activeTab} onSelect={handleTabClick}>
        <TabList className="bg-opacity-0 tabs-boxed">
          <Tab
            className={`tab text-xl text-black font-bold ${
              activeTab === 0 ? "tab-active" : ""
            }`}
            onClick={handlTabBtn}
          >
            Marvel
          </Tab>
          <Tab
            className={`tab text-xl text-black font-bold ${
              activeTab === 1 ? "tab-active" : ""
            }`}
            onClick={handlTabBtn}
          >
            Avenger
          </Tab>
          <Tab
            className={`tab text-xl text-black font-bold ${
              activeTab === 2 ? "tab-active" : ""
            }`}
            onClick={handlTabBtn}
          >
            Transformer
          </Tab>
          <Tab
            className={`tab text-xl text-black font-bold ${
              activeTab === 3 ? "tab-active" : ""
            }`}
            onClick={handlTabBtn}
          >
            StarWar
          </Tab>
        </TabList>

        <br />

        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-8">
            {data.map((item) => (
              <CategoryCard key={item._id} item={item}></CategoryCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mt-8">
            {data.map((item) => (
              <CategoryCard key={item._id} item={item}></CategoryCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mt-8">
            {data.map((item) => (
              <CategoryCard key={item._id} item={item}></CategoryCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mt-8">
            {data.map((item) => (
              <CategoryCard key={item._id} item={item}></CategoryCard>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
