import { useRef } from 'react';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button, Downloader } from 'components';
import catalogName from 'localization/catalogName.json';
import s from './ProductCard.module.css';

const ProductCard = () => {
    const { productId } = useParams();
    const [searchParams] = useSearchParams();
    const mainImg = useRef(null);
    const navigate = useNavigate();
    const catalogIdx = searchParams.get('catalog');
    const catalog = useSelector(state => state.catalogs[catalogIdx - 1]);
    const product = catalog.find(({ id }) => id === productId);

    const chooseProduct = id => {
        navigate(`/product/${id}?catalog=${catalogIdx}`, { replace: true });
    };

    const toMain = url => {
        mainImg.current.src = url;
    };

    console.log('product: ', product); ///////////////
    return (
        <div>
            <div className={s.thumb}>
                <Button
                    text="Назад"
                    onClick={() => {
                        navigate(`/catalog/${catalogIdx}`);
                    }}
                />
                <h2 id="catalog">{catalogName[catalogIdx - 1]}</h2>
                <Downloader />
            </div>
            <div className={s.container}>
                <aside className={s.aside}>
                    <ul className={s.list}>
                        {catalog.map(({ subname, name, img, id }) => (
                            <li key={id} className={id === productId ? s.active : s.item}>
                                <p className={s.category}>
                                    {subname}: <span className={s.cardName}>{name}</span>
                                </p>
                                <img className={s.img} src={img} alt="" width="200" onClick={() => chooseProduct(id)} />
                            </li>
                        ))}
                    </ul>
                </aside>
                <div className={s.cardContainer}>
                    <h2>Product {product.name}</h2>
                    <div className={s.card}>
                        <img src={product.img} alt="" width="800" ref={mainImg} />
                        <p>{product.name} однозначно классный продукт, Вам полюбому нужен. ИНФА = 100%</p>
                    </div>
                    <ul className={s.listImg}>
                        {product.additionalImg?.map(img => (
                            <li key={img} className={s.item}>
                                <img src={img} alt="" width="200" onClick={() => toMain(img)} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
