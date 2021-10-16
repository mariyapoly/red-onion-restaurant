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
        fetch('./Fakedata/menu.json')
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