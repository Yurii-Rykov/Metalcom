import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import s from './ProductCard.module.css';

const ProductCard = () => {
    const { productId } = useParams();
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const catalogIdx = searchParams.get('catalog');
    const catalog = useSelector(state => state.catalogs[catalogIdx - 1]);
    const product = catalog.find(({ id }) => id === productId);

    const chooseProduct = id => {
        navigate(`/product/${id}?catalog=${catalogIdx}`);
    };

    return (
        <div className={s.container}>
            <aside className={s.aside}>
                <ul className={s.list}>
                    {catalog.map(({ name, id }) => (
                        <li key={id} className={s.item}>
                            <img
                                className={s.card}
                                src="https://via.placeholder.com/200x150"
                                alt=""
                                onClick={() => chooseProduct(id)}
                            />
                        </li>
                    ))}
                </ul>
            </aside>
            <div className={s.cardContainer}>
                <h2>Product {product?.name}</h2>
                <div className={s.card}>
                    <img className={s.card} src="https://via.placeholder.com/600x450" alt="" />
                    <p>{product?.name} однозначно классный продукт, Вам полюбому нужен. ИНФА = 100%</p>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
