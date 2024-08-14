import { Helmet } from "react-helmet-async";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import saladImg from "../../assets/menu/salad-bg.jpg"
import pizzaImg from "../../assets/menu/pizza-bg.jpg"
import soupImg from "../../assets/menu/soup-bg.jpg"
import offeredImg from "../../assets/menu/banner3.jpg"
import useMenu from "../../Hooks/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";

const OurMenu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item?.category === "dessert");
  const salad = menu.filter((item) => item?.category === "salad");
  const pizza = menu.filter((item) => item?.category === "pizza");
  const soup = menu.filter((item) => item?.category === "soup");
  const offered = menu.filter((item) => item?.category === "offered");
  console.log(offered)
  
  return (
   <div>
    <Helmet>
        <title>Bistro Boss | OurMenu</title>
      </Helmet>
      {/* category cover section */}
     {/* <Cover 
     img={img}
     title={"OUR MENU"} text={"WOULD YOU LIKE TO TRY A DISH?"}></Cover>
     <SectionTitle subTitle={"don't miss our menu"} heading={"todays offer"}></SectionTitle> */}

     {/* menu category item */}
     <MenuCategory item={offered}  title={"offered"} img={offeredImg} text={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></MenuCategory>
     {/* dessert cover section and category */}
     <MenuCategory item={desserts} title={"desserts"} img={dessertImg} text={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></MenuCategory>
     <MenuCategory item={pizza} title={"pizza"} img={pizzaImg} text={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></MenuCategory>
     <MenuCategory item={salad} title={"salad"} img={saladImg} text={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></MenuCategory>
     <MenuCategory item={soup} title={"soup"} img={soupImg} text={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></MenuCategory>

   </div>
  );
};

export default OurMenu;
