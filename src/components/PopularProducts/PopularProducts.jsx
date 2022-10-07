import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Logo from '../Logo/Logo';
import s from './PopularProducts.module.css';

const idx = new Date().getMonth();

const PopularProducts = () => {
    const catalogs = useSelector(state => state.catalogs);
    const navigate = useNavigate();
    const maxIndexes = catalogs.map(catalog => catalog.length);
    const popularProducts = maxIndexes.map((max, index) => catalogs[index][Math.min(max, idx)]);

    const chooseProduct = (id, index) => {
        navigate(`/product/${id}?catalog=${index + 1}`);
    };

    const onClick = () => {
        navigate(`/catalog`);
    };

    return (
        <section className={s.section}>
            <h2 className={s.title}>Популярні товари цього місяця</h2>
            <ul className={s.list}>
                {popularProducts.map(({ name, id }, index) => (
                    <li key={id}>
                        <img
                            className={s.card}
                            src="https://via.placeholder.com/400x300"
                            alt=""
                            onClick={() => chooseProduct(id, index)}
                        />
                    </li>
                ))}
            </ul>

            <div className={s.button} onClick={onClick}>
                <Logo className={s.logo} /> <p className={s.button_text}>Перейти до повного каталогу...</p>
            </div>
        </section>
    );
};

export default PopularProducts;
