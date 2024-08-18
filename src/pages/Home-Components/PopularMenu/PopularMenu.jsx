import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import ShareMenu from "../../../shares/ShareMenu/ShareMenu";
import useMenu from "../../../Hooks/useMenu";

const PopularMenu = () => {
//   const [menus,setMenu] = useState([]);

//     useEffect(()=>{
//       fetch("menu.json")
//       .then(res=>res.json())
//       .then(data=>{
//         const popularItems = data.filter( item => item?.category === "popular")
//         setMenu(popularItems)
        
//       })
//     },[])

    const [menus] = useMenu()
    const popularItems = menus?.filter(item=>item.category ==="popular")
    
    return (
        <div>

            <SectionTitle
            subTitle={"---Check it out---"}
            heading={"FROM OUR MENU"}
            ></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 m-10">
                {
                    popularItems.map(menu=>(
                        <ShareMenu
                        key={menu._id}
                        item={menu}
                        ></ShareMenu>
                    ))
                }
            </div>
            <div className="text-center my-5 ">
                <button className="btn bg-transparent hover:bg-transparent hover:text-[#D99904] hover:border-[#D99904] border border-b-4 border-black duration-300 hover:scale-110">View All Menu</button>
            </div>
        </div>
    );
};

export default PopularMenu;