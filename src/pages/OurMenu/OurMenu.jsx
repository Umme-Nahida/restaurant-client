import { Helmet } from "react-helmet-async";
import img from "../../assets/menu/banner3.jpg";
import Cover from "../../shares/Cover/Cover";
import PopularMenu from "../Home-Components/PopularMenu/PopularMenu";

const OurMenu = () => {
  return (
   <div>
    <Helmet>
        <title>Bistro Boss | OurMenu</title>
      </Helmet>
     <Cover 
     img={img}
     title={"OUR MENU"} text={"WOULD YOU LIKE TO TRY A DISH?"}></Cover>
     <PopularMenu></PopularMenu>
   </div>
  );
};

export default OurMenu;
