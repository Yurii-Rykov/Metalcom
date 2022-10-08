import { useRef } from 'react';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
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
        navigate(`/product/${id}?catalog=${catalogIdx}`);
    };

    const toMain = url => {
        mainImg.current.src = url;
    };

    console.log('product: ', product);
    return (
        <div className={s.container}>
            <aside className={s.aside}>
                <ul className={s.list}>
                    {catalog.map(({ name, id, img }) => (
                        <li key={id} className={s.item}>
                            <img src={img} alt="" width="200" onClick={() => chooseProduct(id)} />
                        </li>
                    ))}
                </ul>
            </aside>
            <div className={s.cardContainer}>
                
                <div className={s.card}>
                    <div className={s.card_wrapper}>
                        <h2 className={s.card_title}>{product.subname}: "{product.name}"</h2>
                        <img src={product.img} alt="" width="600" ref={mainImg}  className={s.card_img}/>
                       
                    </div>
                    <ul className={s.features}> 
                        {product.features.map(e => (
                            <li key={e} className={s.features_item}>
                                {e}
                            </li>
                        ))}
                    <ul className={s.card_size}>
                        <li className={s.card_size_item}>{product.support === 'square' ? 'Квадрат' : 'Диаметр'} {product.supportSize} mm</li>
                        <li className={s.card_size_item}>Минимальная высота: {product.minHeight} mm</li>
                        <li className={s.card_size_item}>Максимальная высота:{product.maxHeight} mm</li>
                        <li className={s.card_size_item}>Крепление столешницы: {product.fastening}</li>
                        <li className={s.card_size_item}><div className={s.card_text_base}>База:&nbsp;{product.base.map(e => (<p key={e} className={s.card_text_item}>{e}&nbsp;</p>))}</div></li>
                    </ul>
                    </ul>
                   
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
    );
};

export default ProductCard;
