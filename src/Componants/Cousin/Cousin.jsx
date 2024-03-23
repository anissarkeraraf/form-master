import Friend from "../Friend/Friend";
import Speacial from "../Speacial/Speacial";

const Cousin = ({name, asset}) => {
    return (
        <div>
            <h2>Cousin</h2>
            <p>{name}</p>
            <section>
                {
                    asset && <Speacial asset={asset}></Speacial>
                }
                {name === 'Samira' && <Friend></Friend>}
            </section>
        </div>
    );
};

export default Cousin;