const ReuseableForm = ({formTitle, handleSubmited, submitBtnText = 'Submit', children}) => {

    const handleLocalSubmit = e =>{
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value
        }
        handleSubmited(data)
    }

    return (
        <div>
            {children}
            <form onSubmit={handleLocalSubmit}>
                <input name="name" placeholder="User Name" type="text" /><br />
                <input name="email" placeholder="Email" type="text" /><br />
                <input placeholder="Password" type="password" name="password" id="" /><br />
                <input type="submit" value={submitBtnText} />
            </form>
        </div>
    );
};

export default ReuseableForm;