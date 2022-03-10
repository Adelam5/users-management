import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  setCurrPage,
  setMatchAttr,
  setMatchValue,
  setSkip,
} from "../../redux/slices/searchSlice";

const FilterForm = () => {
  const [attr, setAttr] = useState("firstName");
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const filter = (e) => {
    e.preventDefault();
    dispatch(setMatchAttr(attr));
    dispatch(setMatchValue(input));
    dispatch(setSkip(0));
  };

  return (
    <form onSubmit={(e) => filter(e)} className="flex justify-center space-x-5">
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search By"
        />
      </div>
      <div>
        <select name="filter" onChange={(e) => setAttr(e.target.value)}>
          <option value="">No Filter</option>
          <option value="firstName">First name</option>
          <option value="lastName">Last name</option>
          <option value="username">Username</option>
          <option value="email">Email</option>
          <option value="status">Status</option>
        </select>
      </div>
      <div>
        <button
          type="submit"
          className="border border-gray-300 px-5 py-2 rounded-xl"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default FilterForm;
