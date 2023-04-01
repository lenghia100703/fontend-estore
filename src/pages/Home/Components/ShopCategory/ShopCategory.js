import Category from '../Category/Category';

import cat1 from './img/cat1.jpg';
import cat2 from './img/cat2.jpg';
import cat3 from './img/cat3.jpg';

const Categorys = [
    {
        img: cat1,
        type: 'Owmen`S',
        Link: '/',
        nameLink: 'Best New Deals',
    },
    {
        img: cat2,
        type: 'Winter Cloth',
        Link: '/',
        nameLink: 'Best New Deals',
    },
    {
        img: cat3,
        type: 'Man`S Cloth',
        Link: '/',
        nameLink: 'Best New Deals',
    },
];

export default function ShopCategory() {
    return (
        <section className="category-area section-padding30">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-tittle text-center mb-85">
                            <h2>Shop by Category</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {Categorys.map((item, index) => {
                        return (
                            <Category
                                img={item.img}
                                type={item.type}
                                Link={item.Link}
                                nameLink={item.nameLink}
                                key={index}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
