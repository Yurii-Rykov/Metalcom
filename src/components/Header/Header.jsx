import { NavLink } from 'react-router-dom';
import { Logo } from 'components';
import s from './Header.module.css';

const Header = () => {
    return (
        <div className={s.header}>
            <NavLink to="/" className={s.wrapper_logo}>
                <Logo className={s.logoHeader}/>
                <h1 className={s.name}>METALKOM</h1>
            </NavLink>
            <NavLink to="/" className={s.nav}>Головна</NavLink>
            <NavLink to="/catalog" className={s.nav}>Каталог</NavLink>
            <NavLink to="/#about" className={s.nav}>Про компанію</NavLink>
            <NavLink to="/cooperation" className={s.nav}>Співробітництво</NavLink>
            <NavLink to="#footer" className={s.nav}>Контакти</NavLink>
        </div>
    );
};

export default Header;
