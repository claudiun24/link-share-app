import Container from "./index.styled";
import EmailIcon from "../../../../assets/ph_envelope-simple-fill.svg?react";
import LockIcon from "../../../../assets/ph_lock-key-fill.svg?react";
import { Link } from "react-router";
import { Button, Text, TextField } from "../../../../common";
import React from "react";

const RegisterForm = () => {
  const [form, setForm] = React.useState({
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (name, value) => {
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (event) => {
    //Tip: Prevent page to refresh
    event.preventDefault();

    const values = Object.values(form); //["myemail@email.com","myPassword","myPassword"]
    const emailRegex = /[a-z0-9_.-]+@+[a-z0-9.-]+\.[a-z]{2,3}/gi;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[a-zA-Z\d@$!%*?&]{8,15}$/;

    values.forEach(([key, value]) => {
      if (!value) {
        // set error
      }
    });

    if (!emailRegex.test(form.email)) {
      // set error for email
    }

    if (form.password !== form.confirmPassword) {
      // set error for password
    }

    if (!passwordRegex.test(form.confirmPassword)) {
      // set errors for password
    }
  };

  return (
    <Container onSubmit={handleSubmit}>
      <span className="container__group">
        <Text
          as="label"
          for="email"
          size="sm"
          style={{ color: "var(--label-color)" }}
          onChange={(event) => handleChange("password", event.targe.value)}
        >
          Email address
        </Text>

        <TextField
          id="email"
          isIconVisible={true}
          iconChildren={<EmailIcon />}
          placeholder="e.g. alex@email.com"
        />
      </span>
      <span className="container__group">
        <Text
          as="label"
          for="create__password"
          size="sm"
          style={{ color: "var(--label-color)" }}
          onChange={(event) => handleChange("password", event.targe.value)}
        >
          Create Password
        </Text>
        <TextField
          id="create__password"
          type="password"
          isIconVisible={true}
          iconChildren={<LockIcon />}
          placeholder="At least 8 characters"
          onChange={(event) => handleChange("password", event.targe.value)}
        />
      </span>
      <span className="container__group">
        <Text
          as="label"
          for="confirm__password"
          size="sm"
          style={{ color: "var(--label-color)" }}
        >
          Confirm Password
        </Text>
        <TextField
          id="confirm__password"
          type="password"
          isIconVisible={true}
          iconChildren={<LockIcon />}
          placeholder="At least 8 characters"
        />
      </span>
      <Text size="sm">Password must contain at least 8 characters</Text>
      <Button
        variant="fill"
        type="submit"
      >
        Create new account
      </Button>
      <span className="container__cta">
        <Text>Already have an account?</Text>
        <Link to="/auth/login">
          <Text
            as="span"
            style={{ color: "var(--app-color-1)" }}
          >
            Login
          </Text>
        </Link>
      </span>
    </Container>
  );
};

RegisterForm.propTypes = {};

export default RegisterForm;
