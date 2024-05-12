import CSS from "./Menu-Icon.module.css";

export const MenuIcon = (props) => {
  return (
    <li className="nav-item p-3">
      <a
        className={`${CSS.Menu} nav-link mb-0 text-nowrap text-uppercase`}
        href={props.Link}
      >
        {props.Menu}
      </a>
    </li>
  );
};

export const BrandLogo = () => {
  return (
    <div className="fw-bolder fs-3">
      <a className="navbar-brand" href="/">
        WKND
      </a>
    </div>
  );
};
