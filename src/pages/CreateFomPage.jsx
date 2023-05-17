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

  let userId = user.user_id;

  const [titleForm, setTitleForm] = useState("");
  const [desc, setDesc] = useState("");

  const [schema, setSchema] = useState({
    title: "",
    components: [],
    display: "form",
    description: "",
    settings: "",
  });

  const [error, setError] = useState(null);
  let navigate = useNavigate();

  if (error != null) {
    console.log(error);
  }

  const handleChangeForm = (schemaForm) => {
    setSchema(schemaForm);
  };

  const handleChangeTitle = (e) => {
    setTitleForm(e.target.value);
  };

  const handleChangeDesc = (e) => {
    setDesc(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const componentsString = JSON.stringify(schema.components);

    fetch(
      "https://backend2-production-e4eb.up.railway.app/api/v1/forms/create",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({
          ...schema,
          components: componentsString,
          title: titleForm,
          description: desc,
          user_id: userId,
        }),
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
      <div className="container p-4 shadow-md mt-3 rounded-md">
        <div className="flex mb-2 p-2">
          <label className="w-1/6 text-lg font-medium text-slate-600">
            Judul Form
          </label>
          <input
            onChange={handleChangeTitle}
            className="w-5/6 shadow-sm appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-blue-200 "
          />
        </div>
        <hr />
        <div className="flex mb-2 p-2">
          <label className="w-1/6 text-lg font-medium text-slate-600">
            Deskripsi
          </label>
          <textarea
            onChange={handleChangeDesc}
            className="w-5/6 h-24 shadow-sm appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-blue-200 "
          ></textarea>
        </div>
        <hr />
        <div className="flex-col mb-2 p-2 ">
          <label className="w-1/6 mb-3 text-lg font-medium text-slate-600">
            Pilih Komponen
          </label>
          <FormBuilder form={schema} onChange={handleChangeForm} />
        </div>
        <hr />
        <div className="w-full flex justify-end mt-3">
          <button
            onClick={handleSubmit}
            className="w-40 h-16 bg-green-500 text-white p-2 rounded-md text-sm mb-2"
          >
            Simpan Form
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}
