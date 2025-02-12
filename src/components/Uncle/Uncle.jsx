import Cousin from "../Cousin/Cousin";


const Uncle = ({asset}) => {
    return (
        <div>
            <h2>Uncle</h2>
            <section className="flex">
               <Cousin name={'Tanvir'} asset={asset}></Cousin>
               <Cousin name={'Tusher'}></Cousin>
            </section>
        </div>
    );
};

export default Uncle;