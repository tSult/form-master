import { useCallback, useContext } from "react";
import { MoneyContext } from "../Grandpa/Grandpa";


const Bro = () => {
    const []=useContext(MoneyContext);
    return (
        <div>
            <h2>Brother</h2>
            <p>Grandpa:{money}</p>
        </div>
    );
};

export default Bro;