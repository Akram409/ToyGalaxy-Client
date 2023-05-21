import AosSection from "../AosSection/AosSection";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import ShopByCategory from "../ShopByCategory/ShopByCategory";

const Home = () => {
    return (
        <div>
           <Banner />
           <Gallery />
           <ShopByCategory />
           <AosSection />
        </div>
    );
};

export default Home;