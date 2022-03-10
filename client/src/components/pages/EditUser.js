import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Form, Field } from "react-final-form";
import { editUser, getUserById } from "../../services/user.service";
import FormField from "../reusable/FormField";
import Title from "../reusable/Title";

const EditUser = () => {
  const { user } = useSelector((state) => state.users);
  const params = useParams();
  const userId = params.userId;

  useEffect(() => {
    getUserById(userId);
  }, [userId]);

  const onSubmit = (values) => {
    const user = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      status: values.status,
    };
    editUser(userId, user);
  };

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <Title title="Edit user" />
      <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
        <Form
          onSubmit={onSubmit}
          initialValues={{
            firstName: user.firstName || "",
            lastName: user.lastName || "",
            username: user.username || "",
            email: user.email || "",
            status: user.status || "Online",
          }}
          render={({ handleSubmit, submitting, pristine, invalid }) => (
            <form className="mb-0 space-y-6" onSubmit={handleSubmit}>
              <FormField name="firstName" type="text" label="First name" />
              <FormField name="lastName" type="text" label="Last name" />
              <FormField name="email" type="email" label="Email" />
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

export default EditUser;
