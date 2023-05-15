import Header from "../components/Header";
import Signup from "../components/Signup";
import Wrapper from "../components/Wrapper";

export default function SignupPage() {
  return (
    <Wrapper>
      <div className="p-10 shadow-2xl rounded-3xl">
        <Header
          heading="Signup"
          paragraph="Already have an account? "
          linkName="Login"
          linkUrl="/"
        />
        <Signup />
      </div>
    </Wrapper>
  );
}
