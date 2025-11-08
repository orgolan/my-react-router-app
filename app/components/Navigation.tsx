import { NavLink } from "react-router";

export function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
            Home
          </NavLink>
        </li>
        <li>
          <a href="/data" >
            Data
          </a>
        </li>
        <li>
          <NavLink to="/csr" className={({ isActive }) => isActive ? "active" : ""}>
            CSR
          </NavLink>
        </li>
        <li>
          <NavLink to="/ssr" className={({ isActive }) => isActive ? "active" : ""}>
            SSR
          </NavLink>
        </li>
        <li>
          <NavLink to="/protected" className={({ isActive }) => isActive ? "active" : ""}>
            Protected
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className={({ isActive }) => isActive ? "active" : ""}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}