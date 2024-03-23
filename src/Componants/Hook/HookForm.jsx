import useInputState from "../../Hooks/useInputState";

const HookForm = () => {

    const [name, handleNameChange] = useInputState('Rojoni');

    const handleSubmited = e =>{
        console.log('From data', name);
        e.preventDefault()
    }


    return (
        <div>
            <form onSubmit={handleSubmited}>
                <input value={name} onChange={handleNameChange} name="name" placeholder="User Name" type="text" /><br />
                <input name="email" placeholder="Email" type="text" /><br />
                <input placeholder="Password" type="password" name="password" id="" /><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;