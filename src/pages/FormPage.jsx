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
  }, []);

  if (forms === undefined) {
    return <>Loading...</>;
  }

  const handleCreateForm = async () => {
    navigate("/create-form");
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
                          <Button size="xs" variant="solid" colorScheme="red">
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
