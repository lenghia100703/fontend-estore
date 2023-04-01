import logo_footer from './logo2_footer.png';
import HotTag from './Components/HotTag';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Quick_Links = [
    {
        name: 'About',
        to: '/',
    },
    {
        name: 'Offers & Discounts',
        to: '/',
    },
    {
        name: 'Get Coupon',
        to: '/',
    },
    {
        name: 'Contact Us',
        to: '/',
    },
];

const New_Products = [
    {
        name: 'Woman Cloth',
        to: '/',
    },
    {
        name: 'Fashion Accessories',
        to: '/',
    },
    {
        name: 'Man Accessories',
        to: '/',
    },
    {
        name: 'Rubber made Toys',
        to: '/',
    },
];

const Supports = [
    {
        name: 'Frequently Asked Questions',
        to: '/',
    },
    {
        name: 'Terms & Conditions',
        to: '/',
    },
    {
        name: 'Privacy Policy',
        to: '/',
    },
    {
        name: 'Report a Payment Issue',
        to: '/',
    },
];

const description = 'Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore.';

export default function Footer() {
    return (
        <>
            <footer>
                <div className="footer-area footer-padding">
                    <div className="container">
                        <div className="row d-flex justify-content-between">
                            <div className="col-xl-3 col-lg-3 col-md-5 col-sm-6">
                                <div className="single-footer-caption mb-50">
                                    <div className="single-footer-caption mb-30">
                                        <div className="">
                                            <a href="index.html">
                                                <img style={{ height: '70px' }} src={logo_footer} alt=""></img>
                                            </a>
                                        </div>
                                        <div className="footer-tittle">
                                            <div className="footer-pera">
                                                <p>{description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-2 col-lg-3 col-md-3 col-sm-5">
                                <HotTag name="Quick Links" tags={Quick_Links} />
                            </div>

                            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-7">
                                <HotTag name="New Products" tags={New_Products} />
                            </div>

                            <div className="col-xl-3 col-lg-3 col-md-5 col-sm-7">
                                <HotTag name="Supports" tags={Supports} />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xl-7 col-lg-7 col-md-7">
                                <div className="footer-copy-right">
                                    <p>Copyright &copy; 2022</p>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-5 col-md-5">
                                <div className="footer-copy-right f-right">
                                    <div className="footer-social">
                                        <Link to="#">
                                            <i className="fab fa-twitter"></i>
                                        </Link>
                                        <Link to="#">
                                            <i className="fab fa-facebook-f"></i>
                                        </Link>
                                        <Link to="#">
                                            <i className="fas fa-globe"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
