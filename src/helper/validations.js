import * as yup from 'yup'


yup.addMethod(yup.string,'Check Link',(erroMessage)=>{
    
})



export const loginValidation = yup.object({
    email:yup.string()
             .required('Email is required')
             .email('Email address is not valid'),
    password:yup.string()
                .required("Password is required")
                .matches('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$','Password must be min 8 and max 10 characters,one uppercase letter, one lowercase letter, one number and one special character')
})


export const RegisterValidation = yup.object({
    email:yup.string()
             .required('Email is required')
             .email('Email address is not valid'),
    password:yup.string()
                .required("Password is required")
                .matches('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$','Password must be min 8 and max 10 characters,one uppercase letter, one lowercase letter, one number and one special character'),
    passwordConfirmation:yup.string()
                            .required('Confirm your password is required')
                            .oneOf([yup.ref('password'), null], 'Passwords must match'),
    avatar:yup.string()
             .required('Please enter Avtar Url')
             .url('Please enter valid url'),
    fullName:yup.string()
                .required('Enter your name')

})