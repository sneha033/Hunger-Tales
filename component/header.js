import logo from "../Images/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faAt,
  faAddressBook,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

const Title = (
  <a href="/">
    <img src={logo} alt="logo" className="logo" />
  </a>
);

const Header = () => {
  return (
    <div className="header">
      {Title}
      <ul className="navBar">
        <li>
          <FontAwesomeIcon icon={faHouse} style={{ color: "#ee303c" }} />
        </li>
        <li>Home</li>
        <li>
          <FontAwesomeIcon icon={faAt} style={{ color: "#e6303c" }} />
        </li>
        <li>About</li>
        <li>
          <FontAwesomeIcon icon={faAddressBook} style={{ color: "#e6303c" }} />
        </li>
        <li>Contact</li>
        <li>
          <FontAwesomeIcon icon={faCartShopping} style={{ color: "#e6303c" }} />
        </li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

export default Header;
