import Slider from 'components/Slider/Slider';
import { Link } from 'react-router-dom';
import s from './Home.module.css';

const Home = () => {
    return (
        <div>
            HOME
            <section className={s.slider}>
                <Slider />
            </section>
            <section className={s.catalog} id="catalog">
                <Link className={s.link} to="catalog/1">
                    <img src="https://via.placeholder.com/500x350" alt="" />
                    Каталог 1
                </Link>
                <Link className={s.link} to="catalog/2">
                    <img src="https://via.placeholder.com/500x350" alt="" />
                    Каталог 2
                </Link>
                <Link className={s.link} to="catalog/3">
                    <img src="https://via.placeholder.com/500x350" alt="" />
                    Каталог 3
                </Link>
                <Link className={s.link} to="catalog/4">
                    <img src="https://via.placeholder.com/500x350" alt="" />
                    Каталог 4
                </Link>
            </section>
            <section className={s.contacts}>
            <iframe 
                title="myFrame"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2537.373426962818!2d30.460970921899165!3d50
                .508618272036806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.
                1!3m3!1m2!1s0x40d4d2793c3b7b5f%3A0x18ceff484b3f34ba!2z0YPQuy4g0JHQtdGA0LXQttCw0L3RgdC60LDRjywgNCwg0JrQuNC10LIsIDAyMDAw!5e0
                !3m2!1sru!2sua!4v1665043200890!5m2!1sru!2sua"
                width="400"
                height="300"
                style={{border:0}}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>
            </section>
        </div>
    );
};

export default Home;
