import * as Yup from "yup";


export const signUpSchema = Yup.object({
    name:Yup.string().min(2).max(25).required("please enter the correct name"),
    email:Yup.string().email().required("please enter the correct email"),
    password: Yup.string().min(6).required("please enter the correct password"),
    confirm_password:Yup.string().required().oneOf([Yup.ref('password'),null],"please enter correct password"),
});