import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getUsers } from "../../services/user.service";
import Title from "../reusable/Title";
import TableRow from "../reusable/TableRow";
import TableHeadCell from "../reusable/TableHeadCell";
import Pagination from "../reusable/Pagination";
import FilterForm from "../reusable/FilterForm";

const UserList = () => {
  const { users, totalCount } = useSelector((state) => state.users);
  const { matchAttr, matchValue, orderAttr, desc, skip } = useSelector(
    (state) => state.search
  );

  useEffect(() => {
    getUsers(matchAttr, matchValue, orderAttr, desc, skip);
  }, [matchAttr, matchValue, orderAttr, desc, skip]);

  return (
    <>
      <div className="main">
        <Title title="List of users" />
        <div className="flex justify-center mb-3">
          <span className="text-xl px-3 py-2 rounded-full bg-indigo-100">
            Users found: {totalCount}
          </span>
        </div>
        <FilterForm />
        <div className="flex justify-center py-5 text-left overflow-x-auto">
          <table className="border-collapse  md:w-11/12">
            <thead className="bg-indigo-50 h-14">
              <tr>
                <TableHeadCell label="First name" name="firstName" />
                <TableHeadCell label="Last name" name="lastName" />
                <TableHeadCell label="Username" name="username" />
                <TableHeadCell label="Email" name="email" />
                <TableHeadCell label="Status" name="status" />
                <th className="border border-slate-300 p-3">Permisions</th>
                <TableHeadCell label="Created" name="created" />
                <th className="border border-slate-300 p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <TableRow key={user._id} user={user} />
              ))}
            </tbody>
          </table>
        </div>
        <Pagination />
      </div>
    </>
  );
};

export default UserList;
