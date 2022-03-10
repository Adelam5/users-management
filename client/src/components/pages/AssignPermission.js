import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Form } from "react-final-form";
import { getUserById, updatePermissions } from "../../services/user.service";
import { getPermissions } from "../../services/permissions.service";
import Title from "../reusable/Title";
import PermissionFormField from "../reusable/PermissionFormField";

const AssignPermission = () => {
  const { permissionsList, user } = useSelector((state) => state.users);

  const params = useParams();
  const userId = params.userId;

  useEffect(() => {
    getUserById(userId);
  }, [userId]);

  useEffect(() => {
    getPermissions();
  }, []);

  const onSubmit = (values) => {
    const user = {
      permissions: values.permissions,
    };
    updatePermissions(userId, user);
  };
  return (
    <div className="main">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <Title title="Assign Permission" />
        <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
          <p>
            User: {user.firstName} {user.lastName}
          </p>
          <Form
            onSubmit={onSubmit}
            initialValues={{
              permissions: user.permissions || [],
            }}
            render={({ handleSubmit, form, submitting, pristine, values }) => (
              <form className="mt-4 mb-0 space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="permissions">
                    Add or remove premissons for selected user:
                  </label>
                  <div className="pl-5 mt-2 space-y-2">
                    {permissionsList.length > 0 &&
                      permissionsList.map((permission) => (
                        <PermissionFormField
                          key={permission._id}
                          permission={permission}
                        />
                      ))}
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    disabled={submitting || pristine}
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
    </div>
  );
};

export default AssignPermission;
