import { Field } from "react-final-form";
import { formValidation } from "../../validation/formValidation";

const FormField = ({ name, type, label }) => {
  return (
    <Field
      name={name}
      validate={(value, _, meta) =>
        formValidation.validateField(meta.name, value)
      }
    >
      {({ input, meta }) => (
        <div className=" h-16">
          <label
            htmlFor={name}
            className="block text-sm font-medium text-gray-700"
          >
            {label}
          </label>
          <input type={type} {...input} />
          {meta.error && meta.touched && (
            <small className=" text-red-700 flex justify-center">
              {meta.error}
            </small>
          )}
        </div>
      )}
    </Field>
  );
};

export default FormField;
