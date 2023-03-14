import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Votre email doit avoir un format correct")
    .required("Required"),
  password: Yup.string()
    .min(8, "Mot de passe trop court")
    .max(30, "Mot de passe trop long")
    .required("Required"),
});
