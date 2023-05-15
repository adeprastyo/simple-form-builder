import { FormBuilder } from "@formio/react";
import "../styles/formio.css";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

export default function CreateFormPage() {
  const [schema, setSchema] = useState({
    id: 1,
    title: "string",
    components: [],
    display: "form",
    description: "string",
    setting: "string",
    user_id: 8,
  });

  console.log(schema);

  const [error, setError] = useState(null);

  let navigate = useNavigate();

  if (error != null) {
    alert(error);
  }

  const handleChange = (schemaForm) => {
    setSchema(schemaForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      "https://backend2-production-e4eb.up.railway.app/api/v1/forms/create",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(schema),
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Add Form Failed");
        }
      })
      .then((data) => {
        console.log(data);
        setError(null);
        navigate("/dashboard");
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  return (
    <>
      <Navbar />

      <div className="container p-3 shadow-md">
        <div className="w-full flex justify-end mt-3 ">
          <button
            onClick={handleSubmit}
            className="bg-green-500 text-white p-2 rounded-md text-sm"
          >
            Simpan Form
          </button>
        </div>
        <hr className="mb-4" />
        <FormBuilder form={schema} onChange={handleChange} />
      </div>
      <Footer />
    </>
  );
}
