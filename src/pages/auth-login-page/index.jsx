import { AuthLayout, Header } from "../../common";
import { LoginForm } from "../../features/auth";
import Container from "./index.styled";

const AuthLoginPage = () => {
  return (
    <AuthLayout>
      <Container>
        <Header
          headingLabel="Login"
          textLabel="Add your details below to get back into the app"
        />
        <LoginForm />
      </Container>
    </AuthLayout>
  );
};

export default AuthLoginPage;
