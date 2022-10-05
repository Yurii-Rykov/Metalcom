import { NavLink } from 'react-router-dom';
import { Logo } from 'components';
import s from './Header.module.css';

const Header = () => {
    return (
        <div className={s.header}>
            <NavLink to="/">
                <Logo />
            </NavLink>
            <NavLink to="/">Головна</NavLink>
            <NavLink to="/#catalog">Каталог</NavLink>
            <NavLink to="/#about">Про компанію</NavLink>
            <NavLink to="/cooperation">Співробітництво</NavLink>
            <NavLink to="#footer">Контакти</NavLink>
        </div>
    );
};

export default Header;
