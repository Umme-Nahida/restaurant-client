
import Cover from "../../shares/Cover/Cover";
import ShareMenu from "../../shares/ShareMenu/ShareMenu";

const MenuCategory = ({item,title,img,text}) => {
console.log(item)
  return (
    <div>
      {title && <Cover img={img} title={title} text={text}></Cover>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 m-10">
        {
        item?.map((menu) => (
          <ShareMenu key={menu._id} item={menu}></ShareMenu>
        ))}
      </div>
      <div className="text-center mb-10">
        <button className="btn bg-transparent border border-b-4 border-black text-black duration-500 hover:scale-105">ORDER YOUR FAVOURITE FOOD</button>
      </div>
    </div>
  );
};

export default MenuCategory;
