// import { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Logo } from 'components';
import s from './Header.module.css';
// import { languageSelection } from 'redux/reducers';

const Header = () => {
    // const [currentLang, setCurrentLang] = useState('ua');
    const lang = useSelector(state => state.lang);
    // const dispatch = useDispatch();
    // const setLang = lang => {
    //     setCurrentLang(lang);
    //     dispatch(languageSelection(lang));
    // };

    return (
        <div className={s.header}>
            <NavLink to="/" className={s.wrapper_logo}>
                <Logo className={s.logoHeader} />
                <h1 className={s.name}>METALKOM</h1>
            </NavLink>

            <nav>
                <NavLink to="/" className={s.nav}>
                    {lang.head}
                </NavLink>
                <NavLink to="/catalog" className={s.nav}>
                    {lang.catalog}
                </NavLink>
                <NavLink to="/#about" className={s.nav}>
                    {lang.about}
                </NavLink>
                <NavLink to="/cooperation" className={s.nav}>
                    {lang.cooperation}
                </NavLink>
                <NavLink to="#footer" className={s.nav}>
                    {lang.contacts}
                </NavLink>
            </nav>

            {/* <div className={s.localization}>
                <button
                    className={currentLang === 'ua' ? s.active : s.lang}
                    type="button"
                    onClick={() => setLang('ua')}
                >
                    UA
                </button>
                <span> / </span>
                <button
                    className={currentLang === 'ru' ? s.active : s.lang}
                    type="button"
                    onClick={() => setLang('ru')}
                >
                    RU
                </button>
                <span> / </span>
                <button
                    className={currentLang === 'en' ? s.active : s.lang}
                    type="button"
                    onClick={() => setLang('en')}
                >
                    EN
                </button>
            </div> */}
        </div>
    );
};

export default Header;
