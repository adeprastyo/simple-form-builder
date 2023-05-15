import { useState } from "react";
import { signupFields } from "../constants/formFields";
import FormAction from "./FormAction";
import Input from "./Input";
import { useNavigate } from "react-router-dom";

const fields = signupFields;
let fieldsState = {};

fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Signup() {
  const [signupState, setSignupState] = useState(fieldsState);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  if (error != null) {
    alert(error);
  }

  const handleChange = (e) => {
    setSignupState({ ...signupState, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, fullname, password, username } = signupState;

    fetch(
      "https://backend2-production-e4eb.up.railway.app/api/v1/users/register",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, fullname, password, username }),
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Signup failed");
        }
      })
      .then((data) => {
        console.log(data);
        localStorage.setItem("token", data.token);
        setError(null);
        navigate("/dashboard");
      })
      .catch((error) => {
        console.error(error);
        setError("Signup failed. Please try again.");
      });
  };

  return (
    <form className="mt-8 space-y-6 " onSubmit={handleSubmit}>
      <div className="flex-col text-center">
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={signupState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
          />
        ))}
        <FormAction handleSubmit={handleSubmit} text="Signup" />
      </div>
    </form>
  );
}
