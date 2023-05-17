import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Button } from "@chakra-ui/react";

const FormPage = () => {
  let navigate = useNavigate();

  const handleCreateForm = async () => {
    navigate("/create-form");
  };

  return (
    <div className="bg-blue-400">
      <div>
        <Navbar />
        <div className="container">
          <div className="pt-16 justify-center">
            <Button onClick={handleCreateForm}>Create Form</Button>
            <div className="bg-gray-300 mt-4 h-80 mx-auto max-w-6xl flex rounded-lg p-4">
              <h5 className="tracking-wider underline underline-offset-8 font-semibold">
                Existing Form
              </h5>
            </div>
          </div>
        </div>
        <footer className="bg-gray-300 mt-52 flex"></footer>
      </div>
    </div>
  );
};

export default FormPage;
