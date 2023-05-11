import { Center, Container, Heading } from "@chakra-ui/react";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <Container w="100vw" h="100vh" centerContent>
          <Center h="100%">
            <Heading as="h1" size="4xl" color="black">
              <p className="text-lg font-black">Kelompok 2</p>
            </Heading>
          </Center>
        </Container>
      </div>
    </>
  );
}

export default App;
