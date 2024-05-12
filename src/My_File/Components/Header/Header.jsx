import { MenuIcon, BrandLogo } from "./Menu-Icon";
import { Search } from "./Search";

const Header = () => {
  const Menuarr = ["Adventure", "Magzine", "FAQ", "About us"];

  return (
    <nav className="navbar navbar-expand-lg py-4">
      <div className="container">
        <BrandLogo></BrandLogo>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto me-3">
            {Menuarr.map((menu) => (
              <MenuIcon Menu={menu}></MenuIcon>
            ))}
          </ul>
          <form className="d-flex" role="search">
            <Search></Search>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
