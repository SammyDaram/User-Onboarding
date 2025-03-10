import * as yup from 'yup';

const formSchema = yup.object().shape ({
    username: yup
        .string()
        .trim()
        .required('Username is required!')
        .min(3, 'Username must be 3 character long!'),
    email: yup
        .string()
        .email('Must be a valid email address!')
        .required('Email is required'),
    password: yup
        .string()
        .required('password is required!')
        .min(6, 'Password must be 6 character long!'),
    tos: yup
        .boolean()
        .oneOf([true], 'Must accept the terms and conditions')
})

export default formSchema