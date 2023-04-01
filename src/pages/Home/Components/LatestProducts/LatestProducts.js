import { PRODUCTS } from '../../../Products/ProductData';
import Products from '../Products/Products';
import product1 from './img_products/product1.png';
import product2 from './img_products/product2.png';
import product3 from './img_products/product3.png';
import product4 from './img_products/product4.png';
import product5 from './img_products/product5.png';
import product6 from './img_products/product6.png';

const TheProducts = [
    {
        image: 'https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/September2022/tee_recycle_v2_xam_dam_1.jpg',
        type: 'New',
        link: '/product/ao-thun-1',
        name: 'Áo thun thể thao nam Recycle Active V2',
        price: '159.000',
        price_old: '299.000',
    },
    {
        image: 'https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/August2022/cacao_aven_2.jpg',
        type: 'New',
        link: '/product/ao-thun-2',
        name: 'Áo thun Marvel Avengers Logo Basics - Cacao',
        price: '299.000',
        price_old: '299.000',
    },
    {
        image: 'https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/August2022/DSC00703_copy.jpg',
        type: 'New',
        link: '/product/ao-so-mi-2',
        name: 'Áo Sơ mi nam Excool Limited ngắn tay chui đầu',
        price: '259.000',
        price_old: '299.000',
    },
    {
        image: 'https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/November2021/IMG_5535.jpg',
        type: 'Hot',
        link: '/product/ao-polo-1',
        name: 'Áo Polo nam Café - khử mùi hiệu quả',
        price: '239.000',
        price_old: '299.000',
    },
    {
        image: 'https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/November2021/IMG_5535.jpg',
        type: 'New',
        link: '/product/ao-polo-2',
        name: 'Áo Polo nam Café - khử mùi hiệu quả',
        price: '239.000',
        price_old: '299.000',
    },
    {
        image: 'https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/April2022/DSC04707-copy.jpg',
        type: 'Hot',
        link: '/product/ao-the-thao-1',
        name: 'Áo Tank top thể thao nam thoáng khí',
        price: ' 99.000',
        price_old: '299.000',
    },
];

export default function LatestProducts() {
    return (
        <section className="latest-product-area padding-bottom" style={{ marginTop: 100 }}>
            <div className="container">
                <div className="tab-content" id="nav-tabContent">
                    <div
                        className="tab-pane fade show active"
                        id="nav-home"
                        role="tabpanel"
                        aria-labelledby="nav-home-tab"
                    >
                        <div className="row">
                            {PRODUCTS.slice(0, 6).map((product, index) => (
                                <Products key={index} index={index + 'product'} props={product} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
