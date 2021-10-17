import { useEffect, useState } from "react";


const useLoadData = () => {

    const [about, setAbout] = useState([]);
    const [menus, setMenus] = useState([]);


    useEffect(() => {
        fetch('./Fakedata/about.json')
            .then(res => res.json())
            .then(data => setAbout(data))
    }, [])


    useEffect(() => {
        fetch('https://raw.githubusercontent.com/mariyapoly/red-onion-restaurant/main/public/Fakedata/menu.json')
            .then(res => res.json())
            .then(data => setMenus(data))
    }, [])


    return {
        about,
        setAbout,
        menus,
        setMenus
    }
}


export default useLoadData;