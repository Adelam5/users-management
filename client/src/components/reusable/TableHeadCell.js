import { useDispatch, useSelector } from "react-redux";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";
import { setOrderAttr, setOrderValue } from "../../redux/slices/searchSlice";

const TableHeadCell = ({ label, name }) => {
  const { orderAttr, desc } = useSelector((state) => state.search);

  const dispatch = useDispatch();

  const order = () => {
    dispatch(setOrderAttr(name));
    dispatch(setOrderValue(!desc));
  };

  return (
    <th onClick={order} className="border border-slate-300 p-3 cursor-pointer">
      {orderAttr === name &&
        (desc ? (
          <ChevronDownIcon className="inline-block w-6 mr-3" />
        ) : (
          <ChevronUpIcon className="inline-block w-6 mr-3" />
        ))}
      {label}
    </th>
  );
};

export default TableHeadCell;
