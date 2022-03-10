import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import AssignPermission from "./pages/AssignPermission";
import EditUser from "./pages/EditUser";
import UserList from "./pages/UserList";
import NewUser from "./pages/NewUser";
import Messages from "./reusable/Messages";
import Modal from "./reusable/Modal";

const MainRouter = () => {
  const show = useSelector((state) => state.modal.show);

  return (
    <div>
      {show && <Modal />}
      <Header />
      <Messages />
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/new" element={<NewUser />} />
        <Route path="/edit/:userId" element={<EditUser />} />
        <Route path="/assign/:userId" element={<AssignPermission />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default MainRouter;
