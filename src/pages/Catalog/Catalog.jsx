import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Downloader } from 'components';
import s from './Catalog.module.css';

const Catalog = () => {
    const lang = useSelector(state => state.lang);
    return (
        <section id="catalog">
            <h2>{lang.catalogTitle}</h2>
            <ul className={s.catalog}>
                <Link className={s.link} to="1">
                    <img src="https://via.placeholder.com/500x350" alt="" />
                    Каталог 1
                </Link>
                <Link className={s.link} to="2">
                    <img src="https://via.placeholder.com/500x350" alt="" />
                    Каталог 2
                </Link>
                <Link className={s.link} to="3">
                    <img src="https://via.placeholder.com/500x350" alt="" />
                    Каталог 3
                </Link>
                <Link className={s.link} to="4">
                    <img src="https://via.placeholder.com/500x350" alt="" />
                    Каталог 4
                </Link>
            </ul>
            <Downloader />
        </section>
    );
};

export default Catalog;
