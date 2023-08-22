import { Link, NavLink } from "react-router-dom";
import Logo from "/logo.png";

export default function Navbar() {
  return (
    <nav>
      <div className="flex justify-between">
        <Link to="/" className="bg-white p-0 m-0">
          <img src={Logo} alt="sb-logo" className="w-18 h-12" />
        </Link>
        <ul className="flex gap-10 items-center">
          <NavLink id="secondary-btn" href="/register">
            {" "}
            <li>Register </li>
          </NavLink>

          <NavLink id="secondary-btn" href="/logout">
            <li>Logout</li>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
}
