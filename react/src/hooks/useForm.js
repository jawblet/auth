import { useState } from 'react';  

export default function useForm({ initialValues }) {
    const [values, setValues] = useState(initialValues || {});

    const handleChange = event => {
        const value = event.target.value; 
        const name = event.target.name;

        setValues({
            ...values,
            [name]: value
        }); 
    };
 
    return {
        handleChange,
        values,
    }
}