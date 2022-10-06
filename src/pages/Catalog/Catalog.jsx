import { Link } from 'react-router-dom';
import s from './Catalog.module.css';

const Catalog = () => {
    return (
        <section id="catalog">
            <h2>Наша продукция самая продуктивная среди продуктов с продуктивностью</h2>
            <ul className={s.catalog}>
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
            </ul>
        </section>
    );
};

export default Catalog;
