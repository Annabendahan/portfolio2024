import * as React from "react"
import { Link } from 'gatsby';
import Header from '../components/header'


// markup
const Layout = ({ children }) => {
    return (
        <main >
            <Header />
            {children}
      
        </main>
    )
}

export default Layout
