import * as React from "react"
import { Link } from 'gatsby';


// markup
const Header = () => {

    return (
        <main className="header">
            <div className="header_line">
           <Link to="/">
                <p>Anna Bendahan, design + developpement </p>
            </Link>
            <Link to="/about">
                <p>about </p>
            </Link>
            </div>
        </main>
    )
}

export default Header
