import { Link } from "react-router-dom";
import Logo from "/sb-logo.png";

export default function Navbar() {
  return (
    <nav>
      <div className="flex justify-between">
        <img src={Logo} alt="sb-logo" className="mix-blend-normal" />
        <ul className="flex gap-10 items-center">
          <Link id="secondary-btn" href="/register">
            {" "}
            <li>Register </li>
          </Link>
          <Link id="secondary-btn" href="/logout">
            <li>Logout</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}
