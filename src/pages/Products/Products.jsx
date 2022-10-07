import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import s from './Products.module.css';

const Products = () => {
    const { catalogIdx } = useParams();
    const catalog = useSelector(state => state.catalogs[catalogIdx - 1]);
    const navigate = useNavigate();

    const chooseProduct = id => {
        navigate(`/product/${id}?catalog=${catalogIdx}`);
    };

    return (
        <>
            <h2 id="catalog">Prodacts List № {catalogIdx}</h2>
            <ul className={s.catalog}>
                {catalog.map(({ name, id }) => (
                    <li key={id}>
                        <img
                            className={s.card}
                            src="https://via.placeholder.com/400x300"
                            alt=""
                            onClick={() => chooseProduct(id)}
                        />
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Products;
