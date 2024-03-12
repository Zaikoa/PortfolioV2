import { Link, useMatch, useResolvedPath } from "react-router-dom"

// Navbar inside of the site
export default function Navbar() {

  // Returns all of the elements
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Site Name
      </Link>
      <ul>
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/resume">Resume</CustomLink>
        <CustomLink to="/examples">Examples</CustomLink>
        <CustomLink to="/contact">Contact</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
