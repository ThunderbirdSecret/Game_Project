import { Link } from "react-router-dom";
import { items } from "./header-items";
import "./index.scss"

export interface HeaderItems {
    title: string;
    link: string;
}

export default function Header() {
    return (
        <nav className="header">
            <ul>
                {items.map((item, i) => (<li key={i}>
                    <Link className="link" to={item.link}>{item.title}</Link>
                </li>))}
                <li>
                    <Link className="link" to="/auth">Login /</Link>
                    <Link className="link" to="/register">Register</Link>
                </li>
            </ul>
        </nav>
    )
}
