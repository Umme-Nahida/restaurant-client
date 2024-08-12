/* eslint-disable react/prop-types */

const ShareMenu = ({item}) => {

    return (
        <div className="flex items-center space-x-5">
            <img src={item?.image} alt="" style={{borderRadius:"0 200px 200px 200px" }} className="w-[100px]" />
            <div>
                <h1 className="uppercase text-lg md:text-xl">{item?.name}----------------- </h1>
                <p>{item?.recipe} </p>
            </div>
            <p className="text-yellow-400 text-left">${item?.price}</p>
        </div>
    );
};

export default ShareMenu;