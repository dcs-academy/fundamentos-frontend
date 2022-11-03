import * as Yup from "yup";

export const SchemaValidation = Yup.object({
  email: Yup.string()
    .email("Informe um e-mail válido")
    .required("O e-mail é obrigatório!"),
  password: Yup.string()
    .min(4, "É esperado no minimo 4 caracteres")
    .required("A senha é obrigatória!"),
});
