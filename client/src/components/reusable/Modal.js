import { useSelector, useDispatch } from "react-redux";
import { XIcon } from "@heroicons/react/solid";
import { hideModal } from "../../redux/slices/modalSlice";
import { deleteUser } from "../../services/user.service";

const Modal = () => {
  const { user } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const handleDelete = () => {
    deleteUser(user._id);
  };

  return (
    <div className="bg-black fixed w-full h-full bg-opacity-60 flex justify-center items-center">
      <div className="bg-slate-50 max-w-sm py-2 px-3 rounded shadow-xl text-gray-800">
        <div className="flex justify-between items-center">
          <h4 className="text-lg font-bold">Confirm Delete</h4>
          <XIcon
            onClick={() => dispatch(hideModal())}
            className="h-6 w-6 cursor-pointer p-1 hover:bg-gray-300 rounded-full"
          />
        </div>
        <div className="mt-2 text-sm py-7 px-12 ">
          <p>
            Are you sure you want to delete this user? <br />
            User: {user.firstName} {user.lastName}?
          </p>
        </div>
        <div className="mt-3 flex justify-end space-x-3">
          <button
            onClick={() => dispatch(hideModal())}
            className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 text"
          >
            Cancel
          </button>
          <button
            onClick={handleDelete}
            className="px-3 py-1 bg-red-500 hover:bg-red-600 text-gray-100 rounded"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
