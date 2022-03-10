import { Validators } from "@lemoncode/fonk";
import { createFinalFormValidation } from "@lemoncode/fonk-final-form";
import { onlyLetters } from "./customValidators/onlyLetters";
import { onlyLettersAndNumbers } from "./customValidators/onlyLettersAndNumbers";

const validationSchema = {
  field: {
    firstName: [
      {
        validator: Validators.required,
        message: "First name is required",
      },
      {
        validator: Validators.maxLength,
        customArgs: { length: 15 },
        message: "First name is too long",
      },
      {
        validator: onlyLetters,
        customArgs: { message: "First name may contain only letters" },
      },
    ],
    lastName: [
      {
        validator: Validators.required,
        message: "Last name is required",
      },
      {
        validator: Validators.maxLength,
        customArgs: { length: 20 },
        message: "Last name is too long",
      },
      {
        validator: onlyLetters,
        customArgs: { message: "Last name may contain only letters" },
      },
    ],
    username: [
      {
        validator: Validators.required,
        message: "Username is required",
      },
      {
        validator: Validators.maxLength,
        customArgs: { length: 15 },
        message: "Username is too long",
      },
      {
        validator: onlyLettersAndNumbers,
        customArgs: {
          message: "Username may contain only letters and numbers",
        },
      },
    ],
    email: [
      {
        validator: Validators.required,
        message: "Email is required",
      },
      {
        validator: Validators.email,
        message: "Email must be valid",
      },
    ],
    password: [
      {
        validator: Validators.required,
        message: "Password is required",
      },
      {
        validator: Validators.minLength,
        customArgs: { length: 6 },
        message: "Password must have at least 6 characters",
      },
    ],
    code: [
      {
        validator: Validators.required,
        message: "Code is required",
      },
      {
        validator: Validators.minLength,
        customArgs: { length: 4 },
        message: "Code must have 4 characters",
      },
      {
        validator: Validators.maxLength,
        customArgs: { length: 4 },
        message: "Code must have 4 characters",
      },
    ],
    description: [
      {
        validator: Validators.required,
        message: "Description is required",
      },
    ],
  },
};

export const formValidation = createFinalFormValidation(validationSchema);
