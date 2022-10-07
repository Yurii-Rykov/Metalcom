import { NavLink } from 'react-router-dom';
import { Logo } from 'components';
import icons from '../../images/icons'
import s from './Footer.module.css';


const Footer = () => {
    return (
        <footer className={s.footer} id="footer">
            <NavLink to="/" className={s.wrapper_logo}>
                <Logo className={s.logoFooter}/>
                <p className={s.name}>METALKOM</p>
            </NavLink>

            <ul className={s.social}>
                <li><a href="/" className={s.social_link}><img src={`${icons.instagram_icon}`} alt="icon_instagram" /></a></li>
                <li><a href="/" className={s.social_link}><img src={`${icons.facebook_icon}`} alt="icon_facebook" /></a></li>
                <li><a href="/" className={s.social_link}><img src={`${icons.email_icon}`} alt="icon_email" /> </a></li>
            </ul>

            <ul className={s.about}>
                <li><NavLink to="/catalog" className={s.about_nav}>Умови оплати</NavLink></li>
                <li><NavLink to="/#about" className={s.about_nav}>Доставка</NavLink></li>
                <li><NavLink to="/cooperation" className={s.about_nav}>Гарантія на товар</NavLink></li>
            </ul>
            
            <ul className={s.wrapper}>
                <li><a href='tel:+380683526670' className={s.wrapper_contacts}>+38 068 352 66 70</a></li>
                <li><a href='mailto:m22070202@gmail.com' className={s.wrapper_contacts}>m22070202@gmail.com</a></li>
                <li><a href='https://goo.gl/maps/6PcpeWitLvjP28Yv9' className={s.wrapper_contacts}>Вул. Бережанська 4</a></li>
            </ul>
            
   
        </footer>
    );
};

export default Footer;
