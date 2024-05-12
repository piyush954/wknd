import { VscAccount } from "react-icons/vsc";

const TopBar = () => {
  return (
    <>
      <div className="container-fluid bg-black">
        <div className="container justify-content-end d-flex align-items-center py-1">
          <span className="text-white">
            <VscAccount size={15} className="me-2" />
            Account
          </span>
        </div>
      </div>
    </>
  );
};

export default TopBar;
