import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Cart from "../../../shares/Cart/Cart";

const Chef = () => {
   const [menus,setMenus] = useState([]);

    useEffect(()=>{
        fetch("menu.json")
        .then(res=>res.json())
        .then(data=>{
          setMenus(data)
        })
    },[])
    console.log(menus)

    return (
        <div className="py-5 lg:pb-20">
            <SectionTitle
            subTitle={"---Should Try---"}
            heading={"CHEF RECOMMENDS"}
            ></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-5 lg:gap-5 justify-items-center px-5 md:px-20">
                {
                    menus.slice(0,3).map(item=>(
                        <Cart
                        key={item._id}
                        item={item}
                        ></Cart>
                    ))
                }
            </div>
        </div>
    );
};

export default Chef;