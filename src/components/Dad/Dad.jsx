import Bro from "../Bro/Bro";
import Myself from "../Myself/Myself";
import Sis from "../Sis/Sis";


const Dad = () => {
    return (
        <div>
            <h2>Dad</h2>
            <section className=" flex">
                <Myself></Myself>
                <Bro></Bro>
                <Sis></Sis>
            </section>
        </div>
    );
};

export default Dad;