import './layout.scss'
import { Outlet } from 'react-router-dom'
import NavBar from '../../components/Navbar/NavBar.jsx'

function Layout() {
    return(
        <div className="layout">
            <div className="navbar">
                <NavBar />
            </div>
            <div className="content">
                <Outlet>
                </Outlet>
            </div>
        </div>
    )
}

export default Layout