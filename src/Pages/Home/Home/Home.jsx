import AboutUs from "../AboutUs/AboutUs";
import AddressInfo from "../AddressInfo/AddressInfo";
import Banner from "../Banner/Banner";
import Products from "../Products/Products";
import Services from "../Services/Services";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Services></Services>
            <AddressInfo></AddressInfo>
            <Products></Products>
        </div>
    );
};

export default Home;