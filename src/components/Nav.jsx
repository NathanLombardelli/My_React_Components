import {Link, Outlet} from "react-router-dom";

export function Nav() {
    return (
        <>
        <nav>
            <ul>
                <li>
                    <Link to={'/home'}>Home</Link>
                </li>
                <li>
                    <Link to={'/contact'}>Contact</Link>
                </li>
            </ul>
        </nav>
        <Outlet />
        </>
    )
}