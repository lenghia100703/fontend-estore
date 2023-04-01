import gallery1 from './img/gallery1.jpg';
import gallery2 from './img/gallery2.jpg';
import gallery3 from './img/gallery3.jpg';
import Products from '../Products/Products';

const imgList = [
    {
        id: 1,
        img: gallery1,
        alt: 'gallery1',
    },
    {
        id: 2,
        img: gallery2,
        alt: 'gallery2',
    },
    {
        id: 3,
        img: gallery3,
        alt: 'gallery3',
    },
];

export default function ListImg() {
    return (
        <section className="latest-product-area padding-bottom">
            <div className="container">
                <div className="tab-content" id="nav-tabContent">
                    <div
                        className="tab-pane fade show active"
                        id="nav-home"
                        role="tabpanel"
                        aria-labelledby="nav-home-tab"
                    >
                        <div className="row">
                            {imgList.map((item, index) => (
                                <div className="col-xl-4 col-lg-4 col-md-6" key={index}>
                                    <div className="single-product mb-60">
                                        <div className="product-img">
                                            <img src={item.img} alt={item.alt} />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
