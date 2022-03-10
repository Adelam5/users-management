import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import {
  TrashIcon,
  PencilAltIcon,
  PlusCircleIcon,
} from "@heroicons/react/solid";
import { showModal } from "../../redux/slices/modalSlice";

const TableRow = ({ user }) => {
  const dispatch = useDispatch();
  return (
    <>
      <tr className="h-12">
        <td className="border border-slate-300 p-3">{user.firstName}</td>
        <td className="border border-slate-300 p-3">{user.lastName}</td>
        <td className="border border-slate-300 p-3">{user.username}</td>
        <td className="border border-slate-300 p-3">{user.email}</td>
        <td className="border border-slate-300 p-3">{user.status}</td>
        <td className="border border-slate-300 p-3">
          {user.permissions
            .map((permission) => permission.description)
            .join(", ")}
        </td>
        <td className="border border-slate-300 p-3">
          {dayjs(user.created).format("DD.MM.YYYY.")}
        </td>
        <td className="flex justify-around border border-slate-300 p-3">
          <TrashIcon
            onClick={() => dispatch(showModal(user))}
            className=" h-12 w-10 text-red-400 cursor-pointer"
          />
          <Link to={`/edit/${user._id}`}>
            <PencilAltIcon className=" h-12 w-10 text-indigo-400 cursor-pointer" />
          </Link>
          <Link to={`/assign/${user._id}`}>
            <PlusCircleIcon className=" h-12 w-10 text-yellow-400 cursor-pointer" />
          </Link>
        </td>
      </tr>
    </>
  );
};

export default TableRow;
