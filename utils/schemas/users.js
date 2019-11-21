const joi = require('@hapi/joi');

const userIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);
const userEmailSchema = joi.string().email();
const nameSchema = joi.string();
const userPasswordSchema = joi.string();
const userFirstNameSchema = joi.string().max(80);
const userLastNameSchema = joi.string().max(80);
const userBirthdaySchema = joi.string();
const userGenderSchema = joi.string();
const userIsAdminSchema = joi.boolean();
const userPhoneSchema = joi.number();
const userConfirmationTokenSchema = joi.string();
const userResetPasswordTokenSchema = joi.string();
const userSignInCountSchema = joi.number();
const userFailedAttemptsSchema = joi.number();
const userIsLockedSchema = joi.boolean();
const userConfirmedAtSchema = joi.string();
const userLastActivitySchema = joi.string();
const userIsActiveSchema = joi.boolean();
const userProfileIdSchema = joi.number();
const userCreatedAtSchema = joi.string();
const userUpdatedAtSchema = joi.string();

const userSchema = joi.object({
    email: userEmailSchema.required(),
    name: nameSchema,
    password: userPasswordSchema.required(),
    first_name: userFirstNameSchema.required(),
    last_name: userLastNameSchema.required(),
    birthday: userBirthdaySchema.required(),
    gender: userGenderSchema.required(),
    phone_number: userPhoneSchema.required(),
    confirmation_token: userConfirmationTokenSchema,
    reset_password_token: userResetPasswordTokenSchema,
    sign_in_count: userSignInCountSchema,
    failed_attempts: userFailedAttemptsSchema,
    locked: userIsLockedSchema,
    confirmed_at: userConfirmedAtSchema,
    last_activity: userLastActivitySchema,
    active: userIsActiveSchema,
    profile_id: userProfileIdSchema,
    created_at: userCreatedAtSchema,
    updated_at: userUpdatedAtSchema
});

const updateUserSchema = joi.object({
    email: userEmailSchema,
    name: nameSchema,
    password: userPasswordSchema,
    first_name: userFirstNameSchema,
    last_name: userLastNameSchema,
    birthday: userBirthdaySchema,
    gender: userGenderSchema,
    isAdmin: userIsAdminSchema,
    phone_number: userPhoneSchema,
    confirmation_token: userConfirmationTokenSchema,
    reset_password_token: userResetPasswordTokenSchema,
    sign_in_count: userSignInCountSchema,
    failed_attempts: userFailedAttemptsSchema,
    locked: userIsLockedSchema,
    confirmed_at: userConfirmedAtSchema,
    last_activity: userLastActivitySchema,
    active: userIsActiveSchema,
    profile_id: userProfileIdSchema,
    created_at: userCreatedAtSchema,
    updated_at: userUpdatedAtSchema
});

const createUserSchema = joi.object ({
    name: nameSchema,
    email: userEmailSchema,
    password: userPasswordSchema,
    isAdmin: joi.boolean()
})

const createProviderUserSchema = joi.object({
    name: nameSchema,
    email: userEmailSchema,
    password: userPasswordSchema,
    apiKeyToken: joi.string()
})

module.exports = {
    userSchema,
    userIdSchema,
    createUserSchema,
    createProviderUserSchema,
    updateUserSchema,
};