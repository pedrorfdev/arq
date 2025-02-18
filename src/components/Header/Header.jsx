import { Link } from "react-router-dom";

//Assets
import Logo from "../../assets/dnc-logo.svg";
import "./Header.css";

//COMPONENTS
import { useContext, useState } from "react";
import { AppContext } from "../../contexts/AppContext";
import Button from "../Button/Button";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const appContext = useContext(AppContext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <div className="container">
        <div className="al-center d-flex jc-space-between">
          <Link to="/">
            <img src={Logo} />
          </Link>
          <div className="mobile-menu" onClick={toggleMenu}>
            <Button buttonStyle="secondary">Menu</Button>
          </div>
          <nav className={`${isOpen ? "open" : ""}`}>
            <Button
              className="mobile-menu close-btn"
              buttonStyle="unstyled"
              onClick={toggleMenu}
            >
              X
            </Button>
            <ul className="d-flex">
              <li>
                <Link to="/">
                  {appContext.languages[appContext.language].menu.home}
                </Link>
              </li>
              <li>
                <Link to="/about">
                  {appContext.languages[appContext.language].menu.about}
                </Link>
              </li>
              <li>
                <Link to="/projects">
                  {appContext.languages[appContext.language].menu.projects}
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  {appContext.languages[appContext.language].menu.contact}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
