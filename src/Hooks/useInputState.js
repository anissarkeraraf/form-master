import { useState } from "react";

const useInputState = (defaultValue = null) => {
    const [value, setValue] = useState(defaultValue);

    const handleChangeElement = e =>{
        setValue(e.target.value);
    }
    return [value, handleChangeElement];
}
export default useInputState;