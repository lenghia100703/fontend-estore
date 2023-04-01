import '../../assets/css/animate.min.css';
import '../../assets/css/bootstrap.min.css';
import '../../assets/css/flaticon.css';
import '../../assets/css/fontawesome-all.min.css';
import '../../assets/css/magnific-popup.css';
import '../../assets/css/nice-select.css';
import '../../assets/css/owl.carousel.min.css';
import '../../assets/css/slick.css';
import '../../assets/css/slicknav.css';
import '../../assets/css/style.css';
import '../../assets/css/themify-icons.css';

import Load from './Components/Load/Load';
import HeaderBottom from './Components/HeaderBottom/HeaderBottom';

export default function Header() {
    return (
        <>
            {/* <Load /> */}
            <header>
                <div className="header-area">
                    <div className="main-header ">
                        <HeaderBottom />
                    </div>
                </div>
            </header>
        </>
    );
}
