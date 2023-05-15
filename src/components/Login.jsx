import { useState } from "react";
import { loginFields } from "../constants/formFields";
import FormAction from "./FormAction";
import Input from "./Input";
import { useNavigate } from "react-router-dom";

const fields = loginFields;

let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

// hardcore response
const signIn = async () => {
  return {
    access_token: "efawfda232fadad13r",
    username: "User",
    id: 1,
  };
};

export default function Login() {
  const [loginState, setLoginState] = useState(fieldsState);
  // const [dataLogin, setDataLogin] = useState(undefined);
  // console.log(dataLogin);

  let navigate = useNavigate();

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setDataLogin(data);
  //     });
  // }, []);

  // const handleLogin = () => {
  //   dataLogin.forEach((data) => {
  //     if (data.email === loginState["email-address"]) {
  //       navigate("/dashboard");
  //       return;
  //     }
  //   });
  // };

  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // handleLogin();

    // hardcode response
    const result = await signIn();
    localStorage.setItem("access_token", result.access_token);
    navigate("/dashboard");
  };

  return (
    <form className="mt-8 space-y-6 " onSubmit={handleSubmit}>
      <div className="flex-col text-center">
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={loginState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
          />
        ))}
        <FormAction handleSubmit={handleSubmit} text="Login" />
      </div>
    </form>
  );
}
