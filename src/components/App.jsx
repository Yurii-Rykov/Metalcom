import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Loader, Header, Footer } from 'components';
import { Home } from 'pages';

const Catalog = lazy(() => import('pages/Catalog/Catalog'));
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
                        <Route path="catalog" element={<Catalog />} />
                        <Route path="catalog/products/*" element={<Products />} />
                        /* <Route path="catalog/products/:productId/*" element={<ProductCard />} /> */}
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
