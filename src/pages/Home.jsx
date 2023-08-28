import Carousel from "../components/Home/Carousel";
import ProductTabs from "../components/Home/ProductTabs";

const Home = () => {
    return (
        <>
            <div className="py-5">
                <Carousel />
                <ProductTabs />
            </div>
        </>
    );
};

export default Home;
