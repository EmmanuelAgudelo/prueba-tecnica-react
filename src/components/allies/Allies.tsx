import { useLocation } from "react-router-dom";
import { route } from "../../store/store";
import InfoBusiness from "./InfoBusiness";
import InfoUser from "./InfoUser";
import { useEffect } from "react";
import Ratings from "./Ratings";
import Sales from "./Sales";
import SalesRate from "./SalesRate";

const Allies = () => {

    const { setUrl } = route();

    const url = useLocation().state;

    useEffect(() => {
        setUrl(url);
    }, []);



    return (
        <div className="allies_container">
            <section className="allies_info-business"><InfoBusiness /></section>

            <div className="allies_card">
                <InfoUser />
                <Ratings />
                <Sales />
                <SalesRate />
            </div>
        </div>
    );
}

export default Allies;