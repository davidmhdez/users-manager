import * as yup from 'yup';
import usersListTexts from "../../usersListTexts";

export const newUserValidationSchema = yup.object().shape({
    name: yup.string().required(usersListTexts.requiredName),
    gender: yup.string().required(usersListTexts.requiredGender),
    status: yup.string().required(usersListTexts.requiredStatus),
    image: yup.mixed().test("Required image", usersListTexts.requiredImage, (file: any) => !!file)
})

export const updateUserValidationSchema = yup.object().shape({
    name: yup.string().required(usersListTexts.requiredName),
    gender: yup.string().required(usersListTexts.requiredGender),
    status: yup.string().required(usersListTexts.requiredStatus)
})