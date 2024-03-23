import { useContext } from "react";
import { AssetContext } from "../GrandPa/GrandPa";


const Speacial = ({asset}) => {


    const gift = useContext(AssetContext);

    return (
        <div>
            <h2>Specila</h2>
            <p>has: {asset}</p>
            <p>Also has: {gift}</p>
        </div>
    );
};

export default Speacial;