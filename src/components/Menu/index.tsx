import './style.css';
import { Link } from "react-router-dom";

export const Menu = () => {
    return(
        <nav className='menu'>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/posts">Posts</Link></li>
            </ul>
        </nav>
    )
}