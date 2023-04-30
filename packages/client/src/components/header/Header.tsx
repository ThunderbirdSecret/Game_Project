import { Link } from 'react-router-dom';
import { items } from './header-items';
import './index.scss'



export default function Header() {
    return (
        <nav className='header'>
            <div className='header__container'>
                <div className='header__container__logo'>
                    <Link to='/' className='header__container__logo__content'>
                        <img alt="logo" src="/link-main.svg"/>
                        <p>Burning Worms</p>
                    </Link>
                </div>
                <div className='header__container__links'>
                    <ul>
                        {items.map((item, i) => (<li key={i}>
                            <Link className='header__container__links__link' to={item.link}>{item.title}</Link>
                        </li>))}
                    </ul>
                </div>
                <div className='header__container__profile'>
                    <ul>
                        <li className='header__container__profile__no-auth'>
                            <Link className='header__link__auth' to='/auth'>Login</Link>
                            <span>/</span>
                            <Link className='header__link__register' to='/register'>Register</Link>
                        </li>
                        <li className='header__container__profile__auth'>
                            <button className='header__btn__dropdown'>
                                <img alt='avatar' src="" />
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
