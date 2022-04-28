import './App.css';
import FormInput from "./components/FormInput";
import {useState} from "react";

function App() {
    const [values, setValues] = useState({
        username: "",
        email: "",
        birthday: "",
        password: "",
        confirmPassword: "",
    });

    const inputs = [
        {
            id: 1,
            name: "username",
            type: "text",
            placeholder: "Username",
            errorMessage: "Username should be 3-16 characters and should not include any special characters",
            label: "Username",
            pattern: "[a-zA-Z0-9]{3,16}$",
            required: true,
        }, {
            id: 2,
            name: "email",
            type: "email",
            placeholder: "Email",
            errorMessage: "It should be a valid email address",
            label: "Email",
            required: true
        }, {
            id: 3,
            name: "birthday",
            type: "date",
            placeholder: "Birthday",
            label: "Birthday"
        }, {
            id: 4,
            name: "password",
            type: "password",
            placeholder: "Password",
            errorMessage: "Password should be 8 to 20 chars and should include at least one letter, 1 number and one special character",
            label: "Password",
            pattern: "^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$",
            required: true
        }, {
            id: 5,
            name: "confirmPassword",
            type: "password",
            placeholder: "Confirm Password",
            errorMessage: "Passwords don't match",
            label: "Confirm Password",
            pattern: values.password,
            required: true
        }
    ]


    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        console.log(Object.fromEntries(data.entries()));
    }

    const onChange = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="app">

            <form onSubmit={handleSubmit}>
                <h1>Register</h1>
                {inputs.map(input => (
                    <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
                ))}
                <button>Submit</button>
            </form>
        </div>
    );
}

export default App;
