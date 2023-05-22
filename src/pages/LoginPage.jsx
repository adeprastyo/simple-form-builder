import Header from "../components/Header";
import Login from "../components/Login";
import Wrapper from "../components/Wrapper";

export default function LoginPage() {
  return (
    <Wrapper>
      <div className="p-10 shadow-2xl rounded-3xl">
        <Header
          heading="LOGINN"
          paragraph="Don't have an account? "
          linkName="Register"
          linkUrl="/signup"
        />
        <Login />
      </div>
    </Wrapper>
  );
}
