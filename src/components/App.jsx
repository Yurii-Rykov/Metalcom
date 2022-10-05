import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Loader, Header, Footer } from 'components';
import { Home } from 'pages';

const Products = lazy(() => import('pages/Products/Products'));
const ProductCard = lazy(() => import('pages/ProductCard/ProductCard'));
const Cooperation = lazy(() => import('pages/Cooperation/Cooperation'));
const PageNotFound = lazy(() => import('pages/PageNotFound/PageNotFound'));

export const App = () => {
    return (
        <div className="container">
            <Header />
            <main className="main">
                <Suspense fallback={<Loader />}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        {/* <Route path="catalog" element={<Catalog />} /> */}
                        <Route path="catalog/:catalogIdx" element={<Products />} />
                        <Route path="product/:productId" element={<ProductCard />} />
                        <Route path="cooperation" element={<Cooperation />} />
                        {/* <Route path="something" element={<Something />} /> */}
                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
                </Suspense>
            </main>
            <Footer />
        </div>
    );
};
