import joi from 'joi';

export const signupschema={
   body:joi.object({
    username:joi.string().alphanum().min(3).max(20).required(),
    email:joi.string().required(),
    password:joi.string().min(8).max(20).required(),
    confirmemail:joi.valid(joi.ref('password')).required(),


}),
query:joi.object({
    test:joi.boolean().required()
})
};

export const signinschema={
    body:joi.object({
    email:joi.string().required(),
    password:joi.string().min(8).max(20).required(),
    


})
}