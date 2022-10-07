import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// import data from '../../db/catalog.json';
import axios from 'axios';
import s from './Products.module.css';

const Products = () => {
    const { catalogIdx } = useParams();
    const [catalog, setCatalog] = useState([]);
    // console.log('catalog: ', catalog);

    useEffect(() => {
        const getCatalog = async () => {
            try {
                const result = await axios.get(`http://localhost:4000/api/catalogs/${catalogIdx}`);
                setCatalog(result.data);
            } catch (error) {
                console.log(error);
            }
        };
        getCatalog();
    }, [catalogIdx]);

    // const catalog = getCatalog(catalogIdx);

    const navigate = useNavigate();

    const chooseProduct = id => {
        navigate(`/product/${id}?catalog=${catalogIdx}`, { replace: true });
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
