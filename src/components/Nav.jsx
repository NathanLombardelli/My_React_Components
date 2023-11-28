import {Link, Outlet} from "react-router-dom";

export function Nav() {
    return (
        <>
        <nav>
            <ul style={{display:"flex",width:'50%',justifyContent:'space-around',listStyle:'none'}} >
                <li>
                    <Link to={'/buttons'}>Buttons</Link>
                </li>
                <li>
                    <Link to={'/Inputs'}>Inputs</Link>
                </li>
            </ul>
        </nav>
        <Outlet />
        </>
    )
}