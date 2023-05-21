import useTitle from "../../../../Hooks/Hooks";
import About from "../About/About";
import AosSection from "../AosSection/AosSection";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import ShopByCategory from "../ShopByCategory/ShopByCategory";

const Home = () => {
    useTitle('Home')
    return (
        <div>
           <Banner />
           <Gallery />
           <ShopByCategory />
           <AosSection />
           <About />
        </div>
    );
};

export default Home;