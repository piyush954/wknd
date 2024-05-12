import { CiSearch } from "react-icons/ci";

export const Search = (props) => {
  return (
    <form className="form-control bg-body-secondary ">
      <div className=" d-flex justify-content-center">
        <input
          type="search"
          name="searchid"
          id="searchid"
          placeholder="Search..."
          className="form-control-plaintext fw-bold "
        />
        <span className="fs-4 fw-bold d-flex align-items-center">
          <CiSearch />
        </span>
      </div>
    </form>
  );
};
