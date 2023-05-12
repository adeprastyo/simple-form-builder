import Header from "../components/Header";
import Signup from "../components/Signup";

export default function SignupPage() {
  return (
    <>
      <div className="p-10 shadow-2xl rounded-3xl">
        <Header
          heading="Signup"
          paragraph="Already have an account? "
          linkName="Login"
          linkUrl="/"
        />
        <Signup />
      </div>
    </>
  );
}
