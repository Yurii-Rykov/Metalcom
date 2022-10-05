import { useParams, useNavigate } from 'react-router-dom';
import data from '../../db/catalog.json';
import s from './Products.module.css';

const Products = () => {
    const { catalogIdx } = useParams();
    const catalog = data[catalogIdx - 1];
    const navigate = useNavigate();

    const chooseProduct = id => {
        navigate(`/product/${id}?catalog=${catalogIdx}`, { replace: true });
    };

    return (
        <>
            <h2>Prodacts List № {catalogIdx}</h2>
            <ul className={s.catalog}>
                {catalog.map(({ name, id }) => (
                    <li key={name}>
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
