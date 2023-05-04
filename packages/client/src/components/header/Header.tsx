import { Link } from 'react-router-dom';
import { items } from './header-items';
import style from './index.module.scss'



export default function Header() {
    return (
        <nav className={style.header}>
            <div className={style.container}>
                <div className={style.logo}>
                    <Link to='/' className={style.logoContent}>
                        <img alt="logo" src="/link-main.svg"/>
                        <p>Burning Worms</p>
                    </Link>
                </div>
                <div className={style.links}>
                    <ul>
                        {items.map((item, i) => (<li key={i}>
                            <Link className={style.link} to={item.link}>{item.title}</Link>
                        </li>))}
                    </ul>
                </div>
                <div className='profile'>
                    <ul>
                        <li className={style.noAuth}>
                            <Link className='' to='/auth'>Login</Link>
                            <span>/</span>
                            <Link className='' to='/register'>Register</Link>
                        </li>
                        <li className={style.yesAuth}>
                            <button className={style.btnDropdown}>
                                <img alt='avatar' src="" />
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
