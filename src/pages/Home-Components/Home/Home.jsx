import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Chef from "../Chef/Chef";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonial from "../Testimonial/Testimonial";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
       <PopularMenu></PopularMenu>
      <Chef></Chef>
     <Featured></Featured>
     <Testimonial></Testimonial> 
    </div>
  );
};

export default Home;
