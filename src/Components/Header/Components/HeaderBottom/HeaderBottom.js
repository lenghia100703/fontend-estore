import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import logo from './logo.png';
import './HeaderBottom.css';
import { useDispatch, useSelector } from 'react-redux';
import AVATAR_IMG from './avatar.jpg';
import { logout } from '../../../../redux/cartSlice';

export default function HeaderBottom() {
    const navigate = useNavigate();
    const defaultFn = () => {};
    const dispatch = useDispatch();

    const handleLogOut = () => {
        dispatch(logout());
    };

    const showMenu = () => {
        if (document.getElementById('myDropdown').style.display === 'block') {
            active = false;
            document.getElementById('myDropdown').style.display = 'none';
        }else{
            active = true;
            document.getElementById('myDropdown').style.display = 'block';
        }
        console.log(active);
    };

    const numberCart = useSelector((state) => state.numberCart);
    const user = useSelector((state) => state.user);
    const login = true;
    let active = false;

    const [searchValue, setSearchValue] = useState('');
    const [isDarkMode, setDarkMode] = useState(false);

    const toggleDarkMode = (checked) => {
        setDarkMode(checked);
    };

    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };
    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.body.className = theme;
        if (theme === 'dark') {
            toggleDarkMode(true);
        } else {
            toggleDarkMode(false);
        }
        document.getElementById('navigation').className = theme;
        // add class in class name_product
        const products = document.getElementsByClassName('name_product');
        for (let i = 0; i < products.length; i++) {
            products[i].className = 'name_product ' + theme;
        }
        document.getElementById('header-sticky').className = 'row align-items-center ' + theme;
        document.getElementById('header1').style.backgroundColor = theme === 'light' ? '#fff' : '#333';
        document.getElementsByClassName('slicknav_menu').className = theme;
        document.getElementById('search-submit').className = 'form-box f-right ' + theme;
        document.getElementById('dark-mode-btn').className = theme;
        document.getElementById('shopping-card-color').className = 'shopping-card ' + theme;
        document.getElementById('favorit-items-color').className = 'favorit-items ' + theme;
        // const bestProductColor = document.getElementsByClassName('');

        const sliderArea = document.getElementsByClassName('slider-area');
        for (let i = 0; i < sliderArea.length; i++) {
            sliderArea[i].className = 'slider-area ' + theme;
        }
        window.onclick = function (event) {
            if (!event.target.matches('.avatar-show-active') && !event.target.matches('.account-list')) {
                var dropdowns = document.getElementsByClassName('dropdown-content');
                var i;
                for (i = 0; i < dropdowns.length; i++) {
                    var openDropdown = dropdowns[i];
                    if (active === true) {
                        openDropdown.style.display = 'none';
                        console.log('close');
                    }
                }
            }
        };
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchValue.trim()) {
            navigate(`/product/search/keyword=${searchValue}`);
            setSearchValue('');
        } else {
            navigate('/');
        }
    };

    return (
        <div id="header1" className="header-bottom header-sticky">
            <div className="container-fluid">
                <div id="header-sticky" className="row align-items-center">
                    <div className="col-xl-1 col-lg-1 col-md-1 col-sm-3">
                        <div className="logo">
                            <Link to="/">
                                <img style={{ height: '80px' }} src={logo} alt="" />
                            </Link>
                        </div>
                    </div>

                    <div className="col-xl-6 col-lg-8 col-md-7 col-sm-5">
                        <div className="main-menu f-right d-none d-lg-block">
                            <nav>
                                <ul id="navigation">
                                    <li>
                                        <Link className="link-to" to="/">
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="link-to" to="/ao-nam">
                                            Áo
                                        </Link>
                                        <ul className="submenu">
                                            <li>
                                                <Link to="/ao-nam">Áo Nam</Link>
                                            </li>
                                            <li>
                                                <Link to="/ao-thun">Áo T-shirt</Link>
                                            </li>
                                            <li>
                                                <Link to="/ao-so-mi">Áo Sơ Mi</Link>
                                            </li>
                                            <li>
                                                <Link to="/ao-polo">Áo Polo</Link>
                                            </li>
                                            <li>
                                                <Link to="/ao-the-thao">Áo Thể Thao</Link>
                                            </li>
                                            <li>
                                                <Link to="/ao-khoac">Áo Khoác</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link className="link-to" to="/shoes">
                                            Giày
                                        </Link>
                                        <ul className="submenu">
                                            <li>
                                                <Link to="/shoes/nike">Nike</Link>
                                            </li>
                                            <li>
                                                <Link to="/shoes/adidas">Adidas</Link>
                                            </li>
                                            <li>
                                                <Link to="/shoes/vans">Vans</Link>
                                            </li>
                                            <li>
                                                <Link to="/shoes/mlb">MLB</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link className="link-to" to="/hat">
                                            Nón
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="link-to" to="/about">
                                            About
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="link-to" to="/contact">
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-5 col-md-3 col-sm-3 fix-card">
                        <ul className="header-right f-right d-none d-lg-block d-flex justify-content-between">
                            <li className="d-none d-xl-block" style={{ marginTop: 9 }}>
                                <form id="search-submit" className="form-box f-right" onSubmit={handleSubmit}>
                                    <input
                                        id="search-id"
                                        type="text"
                                        name="Search"
                                        placeholder="Search"
                                        value={searchValue}
                                        onChange={(e) => setSearchValue(e.target.value)}
                                    />
                                    <button
                                        className="search-icon"
                                        type="submit"
                                        style={{ border: 'none', backgroundColor: 'white' }}
                                    >
                                        <i className="fas fa-search special-tag"></i>
                                    </button>
                                </form>
                            </li>

                            <div
                                id="dark-mode-btn"
                                style={{ display: 'flex', alignItems: 'center', marginLeft: 20 }}
                                onClick={toggleTheme}
                            >
                                <DarkModeSwitch
                                    className="dark-mode-btn-icon"
                                    checked={isDarkMode}
                                    onChange={toggleDarkMode}
                                    size={35}
                                />
                            </div>

                            <li className=" d-none d-xl-block" style={{ marginTop: 9 }}>
                                <div className="favorit-items" id="favorit-items-color">
                                    <i className="far fa-heart"></i>
                                </div>
                            </li>
                            <li style={{ marginTop: 9 }}>
                                <div className="shopping-card" id='shopping-card-color'>
                                    <div className="count-of-product">{numberCart}</div>
                                    <Link to="/cart">
                                        <i className="fas fa-shopping-cart"></i>
                                    </Link>
                                </div>
                            </li>
                            <li className="d-none d-lg-block" style={{ marginTop: 9 }}>
                                {' '}
                                {user ? (
                                    <div className="dropdown">
                                        <div className="dropbtn" onClick={showMenu} >
                                            <img className='avatar-show-active' src={AVATAR_IMG} alt={user.name}  />
                                        </div>
                                        <div id="myDropdown" className="dropdown-content">
                                            <div className='account-list'>{user.name}</div>
                                            <div className='account-list'>Hồ sơ</div>
                                            <div onClick={handleLogOut}>Đăng xuất</div>
                                        </div>
                                    </div>
                                ) : (
                                    <Link to="/login" className="btn header-btn">
                                        Sign in
                                    </Link>
                                )}
                            </li>
                        </ul>
                    </div>
                    <div className="col-12">
                        <div className="mobile_menu d-block d-lg-none"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
