import CSS from "./Header.module.css";

export const HPHeader = (props) => {
  return (
    <>
      <div
        className={`"container-fluid" ${CSS.header} d-flex align-items-end justify-content-center`}
      >
        <div className="container bg-white p-4">
          <h2 className="h2 py-2">WKND Adventures</h2>
          <p className="fs-5 py-2">
            Join us on one of our next adventures. Browse our list of curated
            experiences and sign up for one when you’re ready to explore with
            us.
          </p>
          <button className="btn btn-warning text-uppercase p-2 px-4">
            View Trips
          </button>
        </div>
      </div>
    </>
  );
};
