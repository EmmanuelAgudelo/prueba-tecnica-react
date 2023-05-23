import { useEffect } from "react";
import { Graph } from "./Graph";
import { BsHandbag } from "react-icons/bs";

const Ratings = () => {
    return (
        <div className="ratings">
            <div className="ratings_img">
                <div className='ratings_img-icon'>
                <BsHandbag className="ratings_img-text-icon"/>
                </div>
                <div className='ratings_img-text'>
                    <p><b>Revu sorpresas vendidas: </b>15</p>
                    </div>
            </div>
            <div className="ratings_graph">
                <Graph/>
            </div>
        </div>
    )
}

export default Ratings