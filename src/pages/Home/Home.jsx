import Slider from 'components/Slider/Slider';
import { Link } from 'react-router-dom';
import s from './Home.module.css';

const Home = () => {
    return (
        <div>
            HOME
            <section className={s.slider}>
            <Slider/>
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
        </div>
    );
};

export default Home;
