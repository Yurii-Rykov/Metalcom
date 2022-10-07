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
                <li className={s.social_item}><a href="/" className={s.social_link}><img className={s.link_instagram} src={`${icons.instagram_icon}`} alt="icon_instagram" /></a></li>
                <li className={s.social_item}><a href="/" className={s.social_link}><img className={s.link_facebook} src={`${icons.facebook_icon}`} alt="icon_facebook" /></a></li>
                <li className={s.social_item}><a href="/" className={s.social_link}><img className={s.link_email} src={`${icons.email_icon}`} alt="icon_email" /> </a></li>
            </ul>

            <ul className={s.about}>
                <li className={s.about_item}><p className={s.about_text}>Інформація:</p></li>
                <li className={s.about_item}><NavLink to="/catalog" className={s.about_nav}>Умови оплати</NavLink></li>
                <li className={s.about_item}><NavLink to="/#about" className={s.about_nav}>Доставка</NavLink></li>
                <li className={s.about_item}><NavLink to="/cooperation" className={s.about_nav}>Гарантія на товар</NavLink></li>
            </ul>
            
            <ul className={s.wrapper}>
                <li className={s.wrapper_item}><a href='tel:+380683526670' className={s.wrapper_contacts}><img src={`${icons.phone_icon}`} alt="icon_phone" /><p className={s.wrapper_text}>+38 068 352 66 70</p></a></li>
                <li className={s.wrapper_item}><a href='mailto:m22070202@gmail.com' className={s.wrapper_contacts}><img src={`${icons.email_icon}`} alt="icon_email" /><p className={s.wrapper_text}>m22070202@gmail.com</p></a></li>
                <li className={s.wrapper_item}><a href='https://goo.gl/maps/6PcpeWitLvjP28Yv9' className={s.wrapper_contacts}><img src={`${icons.location_icon}`} alt="icon_email" /><p className={s.wrapper_text}>М.Київ вул. Бережанська 4</p></a></li>
            </ul>
            
   
        </footer>
    );
};

export default Footer;
