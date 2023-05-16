import { FormBuilder } from "@formio/react";
import "../styles/formio.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function CreateFormPage() {
  const user = useSelector((state) => {
    return state.user;
  });

  const [schema, setSchema] = useState({
    title: "ini adalah title",
    components: [],
    display: "form",
    description: "ini adalah deskripsi",
    setting: "",
    user_id: user.user_id,
  });

  const [error, setError] = useState(null);
  let navigate = useNavigate();

  if (error != null) {
    console.log(error);
  }

  const handleChange = (schemaForm) => {
    setSchema(schemaForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const componentsString = JSON.stringify(schema.components);
    // console.log(schema.components);
    // console.log(componentsString);

    fetch(
      "https://backend2-production-e4eb.up.railway.app/api/v1/forms/create",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${user.token}`,
          Authorization: user.token,
        },
        body: JSON.stringify({ ...schema, components: componentsString }),
        // body: JSON.stringify(schema),
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
