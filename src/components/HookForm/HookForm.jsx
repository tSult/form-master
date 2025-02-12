import useInputState from "../../hooks/hooksInputState";


const HookForm = () => {
    // const [name,handleNameChange] =useInputState('Tasmia')
    const emailState=useInputState('tasmia@g.com');

    const handleSubmit =e=>{
        console.log('Form data :',emailState.value);
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
            {/* <input value={name} onChange={handleNameChange} type="text" name="name" /> */}
            <br />
            <input {...emailState} type="email" name="email" />
            <br />
            <input type="password" name="password" />
            <br />
            <input type="submit" name="submit" />
            <br />
            
          </form>
        </div>
    );
};

export default HookForm;