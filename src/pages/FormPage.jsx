import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Text,
  ButtonGroup,
  SimpleGrid,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const FormPage = () => {
  const user = useSelector((state) => {
    return state.user;
  });

  const [forms, setForms] = useState(undefined);
  let navigate = useNavigate();

  useEffect(() => {
    fetch("https://backend2-production-e4eb.up.railway.app/api/v1/forms/get", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setForms(data);
      });
  }, [user.token]);

  if (forms === undefined) {
    return <>Loading...</>;
  }

  const handleCreateForm = async () => {
    navigate("/create-form");
  };

  const handleDeleteForm = async (formId) => {
    try {
      const response = await fetch(
        `https://backend2-production-e4eb.up.railway.app/api/v1/forms/delete/${formId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      if (response.ok) {
        console.log("Form deleted successfully");
        const updatedForms = forms.filter((form) => form.id !== formId);
        setForms(updatedForms);
      } else {
        console.log("Failed to delete form");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="pt-16 justify-center">
          <Button colorScheme="green" onClick={handleCreateForm}>
            Create Form
          </Button>
          <div className="shadow-md border-blue-700 border mt-4  mx-auto max-w-6xl flex-col rounded-xl p-6">
            <h5 className="tracking-wider underline underline-offset-8 font-semibold mb-10">
              Existing Form
            </h5>
            <div className="m-8">
              <SimpleGrid
                spacing={4}
                templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
              >
                {forms.map((form) => {
                  return (
                    <Card
                      key={form.id}
                      boxShadow="xl"
                      maxW="sm"
                      border="1px"
                      borderColor="gray.300"
                    >
                      <CardBody>
                        <Stack mt="6" spacing="1">
                          <Heading size="md">{form.title}</Heading>
                          <Text size="sm">{form.description}</Text>
                        </Stack>
                      </CardBody>

                      <CardFooter>
                        <ButtonGroup spacing="2">
                          <Button size="xs" variant="solid" colorScheme="blue">
                            Edit Form
                          </Button>
                          <Button
                            onClick={() => {
                              handleDeleteForm(form.id);
                            }}
                            size="xs"
                            variant="solid"
                            colorScheme="red"
                          >
                            Delete Form
                          </Button>
                        </ButtonGroup>
                      </CardFooter>
                    </Card>
                  );
                })}
              </SimpleGrid>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-gray-300 mt-52 flex"></footer>
    </div>
  );
};

export default FormPage;
