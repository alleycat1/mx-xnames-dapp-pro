import * as Yup from "yup"

export const validationSchema = {
  username: Yup.string().max(20, "Name is too long"),
  // max length should be changed soon
  domain: Yup.string().max(15, "Domain name is too long"),
}
