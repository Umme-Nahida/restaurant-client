
/* eslint-disable react/prop-types */

import { Parallax } from "react-parallax";

const Cover = ({img,title,text}) =>{

    return (
        <Parallax
        blur={{ min: -50, max:50 }}
        bgImage={img}
        bgImageAlt="image"
        strength={-200}
    >
        <div
        style={{backgroundImage:`url(${img})`}}
        className="hero bg-base-200 h-[600px]">
        <div className="bg-black opacity-70 w-3/5 py-20 text-white">
          <div className="hero-content text-center ">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">{title}</h1>
              <p className="py-3">{text}</p>
            </div>
          </div>
        </div>
      </div>
    </Parallax>
       
    );
};

export default Cover;