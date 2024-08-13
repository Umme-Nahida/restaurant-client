import { useEffect, useState } from "react";


const useMenu = () => {
    const [menus,setMenu] = useState([]);
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
      fetch("menu.json")
      .then(res=>res.json())
      .then(data=>{
        setMenu(data)
        setLoading(false) 
      })
    },[])
    console.log(menus)
    return [menus,loading]
};

export default useMenu;