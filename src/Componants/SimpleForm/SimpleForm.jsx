
const SimpleForm = () => {

    const handleSubmited = e =>{
        e.preventDefault()
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log('submited btn');
    }

    return (
        <div>
            <form onSubmit={handleSubmited}>
                <input name="name" placeholder="User Name" type="text" /><br />
                <input name="email" placeholder="Email" type="text" /><br />
               <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;