import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import ShareMenu from "../../../shares/ShareMenu/ShareMenu";

const PopularMenu = () => {
  const [menus,setMenu] = useState([]);

    useEffect(()=>{
      fetch("menu.json")
      .then(res=>res.json())
      .then(data=>{
        const popularItems = data.filter( item => item?.category === "popular")
        setMenu(popularItems)
        
      })
    },[])
    console.log(menus)
    return (
        <div>
            <SectionTitle
            subTitle={"---Check it out---"}
            heading={"FROM OUR MENU"}
            ></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 m-10">
                {
                    menus.map(menu=>(
                        <ShareMenu
                        key={menu._id}
                        item={menu}
                        ></ShareMenu>
                    ))
                }
            </div>
        </div>
    );
};

export default PopularMenu;