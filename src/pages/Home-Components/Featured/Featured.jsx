import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import img1 from "../../../assets/home/featured.jpg";

const Featured = () => {
  return (
    <div
      style={{ backgroundImage: `url(${img1})` }} className=" bg-cover bg-fixed">
      <div className="bg-black bg-opacity-50 h-full py-10">
        <SectionTitle
          subTitle={"---Check it out---"}
          heading={"FROM OUR MENU"}
        ></SectionTitle>
        <div className="flex flex-col md:flex-row items-center justify-center gap-x-10">
          <div className="flex items-center justify-end">
            <img src={img1} alt="" className="w-4/5" />
          </div>
          <div className="text-white font-medium space-y-3">
            <h5>March 20, 2023</h5>
            <h4>WHERE CAN I GET SOME?</h4>
            <p className="w-3/5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <button className="btn bg-transparent border border-b-4 border-white text-white hover:text-white hover:bg-[#FACC15] hover:border-b-[#D99904] duration-300">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
