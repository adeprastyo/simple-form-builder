import Header from "../components/Header";
import Login from "../components/Login";

export default function LoginPage() {
  return (
    <div className="p-10 shadow-2xl rounded-3xl">
      <Header
        heading="LOGIN"
        paragraph="Don't have an account? "
        linkName="Register"
        linkUrl="/signup"
      />
      <Login />
    </div>
  );
}
