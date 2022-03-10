import { Field } from "react-final-form";

const PermissionFormField = ({ permission }) => {
  return (
    <div>
      <Field
        name="permissions"
        component="input"
        type="checkbox"
        value={permission._id}
      />
      <label className="ml-2">
        <strong>Code:</strong> {permission.code} - <strong>Description:</strong>{" "}
        {permission.description}
      </label>
    </div>
  );
};

export default PermissionFormField;
