import { Form, Field } from "react-final-form";
import { createUser } from "../../services/user.service";
import FormField from "../reusable/FormField";
import Title from "../reusable/Title";

const NewUser = () => {
  const onSubmit = (values) => {
    const user = {
      firstName: values.firstName,
      lastName: values.lastName,
      username: values.username,
      email: values.email,
      password: values.password,
      status: values.status,
    };
    createUser(user);
  };

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <Title title="Create new user" />
      <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
        <Form
          onSubmit={onSubmit}
          initialValues={{ status: "online" }}
          render={({ handleSubmit, submitting, pristine, invalid }) => (
            <form className="mb-0 space-y-6" onSubmit={handleSubmit}>
              <FormField name="firstName" type="text" label="First name" />
              <FormField name="lastName" type="text" label="Last name" />
              <FormField name="username" type="text" label="Username" />
              <FormField name="email" type="email" label="Email" />
              <FormField name="password" type="password" label="Password" />
              <div>
                <label
                  htmlFor="status"
                  className="block text-sm font-medium text-gray-700"
                >
                  Status
                </label>
                <div className="mt-1">
                  <Field name="status" component="select">
                    <option value="Online">Online</option>
                    <option value="Away">Away</option>
                    <option value="Busy">Busy</option>
                  </Field>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={submitting || pristine || invalid}
                  className="btn-form"
                >
                  Save
                </button>
              </div>
            </form>
          )}
        />
      </div>
    </div>
  );
};

export default NewUser;
