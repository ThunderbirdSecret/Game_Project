import { Link } from 'react-router-dom';
import { items } from './header-items';
import './index.scss'



export default function Header() {
    return (
        <nav className='header'>
            <div className='container'>
                <div className='logo'>
                    <Link to='/' className='logoContent'>
                        <img alt="logo" src="/link-main.svg"/>
                        <p>Burning Worms</p>
                    </Link>
                </div>
                <div className='links'>
                    <ul>
                        {items.map((item, i) => (<li key={i}>
                            <Link className='link' to={item.link}>{item.title}</Link>
                        </li>))}
                    </ul>
                </div>
                <div className='profile'>
                    <ul>
                        <li className='noAuth'>
                            <Link className='' to='/auth'>Login</Link>
                            <span>/</span>
                            <Link className='' to='/register'>Register</Link>
                        </li>
                        <li className='yesAuth'>
                            <button className='btnDropdown'>
                                <img alt='avatar' src="" />
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
