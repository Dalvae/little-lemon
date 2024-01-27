import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav aria-label="Main navigation">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/bookings">Bookings</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
