import { Outlet, Link } from "react-router-dom";

export default function CategoryLayout() {
    return (
        <>
        <nav>
            <Link to="sko">Sko</Link>
            <Link to="bukse">Bukse</Link>
            <Link to="svampebobsokker">Svampebobsokker</Link>
            <Link to="svampebobgenser">Svampebobgenser</Link>
            <Link to="svampebobundertøy">Svampebobundertøy</Link>
        </nav>
        <Outlet />
        </>
        
    )
}