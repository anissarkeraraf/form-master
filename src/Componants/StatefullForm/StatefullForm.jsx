import { useState } from "react";

const StatefullForm = () => {

    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState('');

    const handleSubmited = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError('password must be 6 charecter or longer');
        } else {
            setError('')
        }
        console.log(name, email, password);
    }

    const handleChange = e => {
        console.log(e.target.value);
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    const hangleNameChange = e => {
        setName(e.target.value);
    }


    return (
        <div>
            <form onSubmit={handleSubmited}>
                <input onChange={hangleNameChange} name="name" placeholder="User Name" type="text" /><br />
                <input onChange={handleChange} name="email" placeholder="Email" type="text" /><br />
                <input onChange={handlePasswordChange} placeholder="Password" type="password" name="password" id="" /><br />
                <input type="submit" value="Submit" />
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StatefullForm;