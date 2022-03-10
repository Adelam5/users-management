import { useSelector, useDispatch } from "react-redux";
import { XIcon } from "@heroicons/react/solid";
import { resetMessages } from "../../redux/slices/messagesSlice";

const Messages = () => {
  const { success, error } = useSelector((state) => state.messages);
  const dispatch = useDispatch();
  return (
    <div className="flex justify-center">
      {success && (
        <div className="flex bg-emerald-200 w-fit py-3  mt-2 rounded">
          <span className="px-8">{success}</span>
          <XIcon
            onClick={() => dispatch(resetMessages())}
            className="h-6 w-6 cursor-pointer mx-8 p-1 hover:bg-gray-100 rounded-full"
          />
        </div>
      )}
      {error && (
        <div className="flex bg-red-200 w-fit py-3  mt-2 rounded">
          <span className="px-8">{error}</span>
          <XIcon
            onClick={() => dispatch(resetMessages())}
            className="h-6 w-6 cursor-pointer mx-8 p-1 hover:bg-gray-100 rounded-full"
          />
        </div>
      )}
    </div>
  );
};

export default Messages;
