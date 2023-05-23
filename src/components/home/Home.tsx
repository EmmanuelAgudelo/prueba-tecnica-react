import { useLocation } from "react-router-dom";
import { route } from "../../store/store";
import { useEffect } from "react";

const Home = () => {

    const { setUrl } = route();

    const url = useLocation().state;

    useEffect(() => {
        setUrl(url)
        console.log(url);
    }, [])
    
    return ( 
        <h1>Home</h1>
     );
}
 
export default Home;