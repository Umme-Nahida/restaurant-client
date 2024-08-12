import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Chef from "../Chef/Chef";
import PopularMenu from "../PopularMenu/PopularMenu";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Chef></Chef>
        </div>
    );
};

export default Home;