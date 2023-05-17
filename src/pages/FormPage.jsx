
import Body from "../components/Body";
import Button from "../components/Button";

const FormPage = () => {
    return (
      <body className="bg-blue-400">
        <div>
          <header className="bg-gray-300 top-0 left-0 flex items-center absolute w-full">
            <div className="container">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="px-10 py-5 font-semibold tracking-wider">
                    Form Builder Web
                  </h1>
                </div>
                <Button variant="border border-black rounded-full text-xs py-1 h-7 tracking-wider text-justify font-normal">
                  Logut
                </Button>
              </div>
            </div>
          </header>
          <div className="container">
            <div className="pt-16 justify-center">
              <div className="bg-gray-300 mt-32 h-80 mx-auto max-w-6xl flex rounded-lg">
                <h1 className="px-10 py-5 tracking-wider underline underline-offset-8 font-semibold">
                  Existing Form
                </h1>
                <Body />
              </div>
            </div>
          </div>
          <footer className="bg-gray-300 mt-52 flex"></footer>
        </div>
      </body>
    );
  };
  
  export default FormPage;