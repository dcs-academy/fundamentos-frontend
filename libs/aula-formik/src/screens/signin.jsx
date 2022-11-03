import { Formik, Form, Field } from "formik";
import { SchemaValidation } from "./schema.signin";

function validateEmptyField(value, message) {
  return !value ? message : undefined;
}

function validateEmail(value) {
  return validateEmptyField(value, "O e-mail é obrigatório!");
}

function validatePassword(value) {
  return validateEmptyField(value, "A senha é obrigatória!");
}

export function SignInForm() {
  return (
    <>
      <h1>Autenticação</h1>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={SchemaValidation}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log(values);
            setSubmitting(false);
          }, 3000);
        }}
      >
        {({ errors, isSubmitting }) => (
          <Form>
            <label htmlFor="email">Email</label>
            <Field
              id="email"
              name="email"
              type="email"
              disabled={isSubmitting}
            />
            {errors.email && <div>{errors.email}</div>}
            <label htmlFor="password">Senha</label>
            <Field
              id="password"
              name="password"
              type="password"
              disabled={isSubmitting}
            />
            {errors.password && <div>{errors.password}</div>}
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Enviando..." : "Entrar"}
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}
