import { Formik, Form, Field } from "formik";

import { loginSchema } from "./services/loginValidator";

function App() {
  const handleLogin = (values) => console.log(values);

  return (
    <div>
      <h1>Connexion</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={loginSchema}
        onSubmit={handleLogin}
      >
        {({ errors, touched }) => (
          <Form>
            <Field name="email" type="email" />
            {errors.email && touched.email && (
              <p style={{ color: "red" }}>{errors.email}</p>
            )}
            <Field name="password" type="password" />
            {errors.password && touched.password && (
              <p style={{ color: "red" }}>{errors.password}</p>
            )}
            <button type="submit">Envoyer</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default App;
