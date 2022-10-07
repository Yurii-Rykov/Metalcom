import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Logo from '../Logo/Logo';
import s from './PopularProducts.module.css';

const PopularProducts = () => {
    // const [allCatalogs, setAllCatalogs] = useState([]);
    const [popularProducts, setPopularProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const getPopular = async () => {
            try {
                const result = await axios.get(`http://localhost:4000/api/catalogs/all`);
                const idx = new Date().getMonth();
                const maxIndexes = result.data.map(catalog => catalog.length);
                setPopularProducts(maxIndexes.map((i, index) => result.data[index][Math.min(idx, i)]));
            } catch (error) {
                console.log(error);
            }
        };
        getPopular();
    }, []);

    const chooseProduct = (id, index) => {
        navigate(`/product/${id}?catalog=${index + 1}`, { replace: true });
    };

    const onClick = () => {
        navigate(`/catalog`, { replace: true });
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
                            onClick={e => chooseProduct(id, index)}
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
