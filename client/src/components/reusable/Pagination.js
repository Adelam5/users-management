import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/solid";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSkip } from "../../redux/slices/searchSlice";

const Pagination = () => {
  const limit = 10;
  const { totalCount } = useSelector((state) => state.users);
  const { skip } = useSelector((state) => state.search);
  const totalPages = Math.ceil(totalCount / limit);
  const [currPage, setCurrPage] = useState(0);
  const [startPage, setStartPage] = useState(0);
  const [pagesToShow, setPagesToShow] = useState(10);

  useEffect(() => {
    if (totalPages <= 9) {
      setPagesToShow(totalPages);
    } else {
      setPagesToShow(10);
      if (currPage < 6) {
        setStartPage(0);
      } else if (currPage + 4 >= totalPages - 1) {
        setStartPage(totalPages - 10);
      } else {
        setStartPage(currPage - 5);
      }
    }
  }, [totalPages, currPage]);

  const dispatch = useDispatch();

  const previous = () => {
    if (currPage === 0) return;
    dispatch(setSkip(skip - limit));
    setCurrPage((prev) => prev - 1);
  };

  const next = () => {
    if (currPage + 1 === totalPages) return;
    dispatch(setSkip(skip + limit));
    setCurrPage((prev) => prev + 1);
  };

  const jump = (page) => {
    dispatch(setSkip(page * limit));
    setCurrPage(page);
  };

  return (
    <div
      className={
        totalPages > 0
          ? "flex justify-between items-center md:mx-10 my-3 p-4 rounded-full border border-gray-200 "
          : "hidden"
      }
    >
      <div
        onClick={previous}
        className={
          skip >= limit
            ? "hidden md:flex items-center space-x-2 cursor-pointer"
            : "flex items-center space-x-2 invisible"
        }
      >
        <ArrowLeftIcon className="w-10" />
        <span>Previous</span>
      </div>
      <div className="flex justify-around w-full md:w-7/12 ">
        {[...Array(pagesToShow)].map((page, i) => (
          <span
            key={i}
            onClick={() => jump(startPage + i)}
            className={
              startPage + i === currPage
                ? "page border-indigo-600"
                : "page border-gray-200"
            }
          >
            {startPage + i + 1}
          </span>
        ))}
      </div>
      <div
        onClick={next}
        className={
          skip + limit < totalCount
            ? "hidden md:flex items-center md:space-x-2 cursor-pointer"
            : "flex items-center space-x-2 invisible"
        }
      >
        <span>Next</span>
        <ArrowRightIcon className="xs:w-5 w-10" />
      </div>
    </div>
  );
};

export default Pagination;
