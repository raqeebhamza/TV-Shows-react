import { Link } from "react-router-dom"

export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container">
                <nav className="navbar__nav">
                    <h3 className="nav__brand">
                        <Link to="/">
                            <i className="fas fa-tv-alt"> TV SHOWS</i>
                        </Link>
                    </h3>
                    <ul className="nav__links">
                        <li className="links__link">
                            <Link to ="/">HOME</Link>
                        </li>
                        <li className="links__link">
                            <Link to ="/">ABOUT</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
