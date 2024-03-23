import { useEffect, useRef } from "react";


const RefForm = () => {

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleSubmited = e =>{
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
    }

    useEffect(() => {
        nameRef.current.focus();
    },[])


    return (
        <div>
             <form onSubmit={handleSubmited}>
                <input ref={nameRef} name="name" placeholder="User Name" type="text" /><br />
                <input ref={emailRef} name="email" placeholder="Email" type="text" /><br />
                <input ref={passwordRef} placeholder="Password" type="password" name="password" id="" /><br />
               <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default RefForm;