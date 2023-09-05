import { Link } from "react-router-dom/cjs/react-router-dom";
import "./header.css";
const Header = () => {
  return (
    <div>
      <header>
        <div className=" fDatabase">FRIENDS DATABASE</div>
        <Link to="/login">LOGIN</Link>
        <Link to="/friendlist">FRIENDLIST</Link>
        <Link to="/addfriend">ADDFRIEND</Link>
        <Link to="/logout">LOGOUT</Link>
      </header>
      <hr></hr>
    </div>
  );
};
export default Header;
