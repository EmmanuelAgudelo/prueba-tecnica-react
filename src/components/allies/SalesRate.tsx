import { Graph } from "./Graph";
import { CiStar } from "react-icons/ci";

const SalesRate = () => {
    return (
        <div className="ratings">
            <div className="ratings_img">
                <div className='ratings_img-icon'>
                    <CiStar className="ratings_img-text-icon" />
                </div>
                <div className='ratings_img-text'>
                    <p><b>Clasificaciones</b></p>
                </div>
            </div>
            <div className="ratings_graph">
                <Graph />
            </div>
        </div>
    )
}

export default SalesRate