import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../redux/cartSlice';
// import { FormLogin } from "./components/FormLogin"
import { useEffect } from 'react';

export default function Login() {
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
    // set name page
    document.title = 'Login';
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users);

    const handleLogin = (e) => {
        const payload = users.find((user) => user.email === email && user.password === password);

        if (payload) {
            dispatch(login(payload));
            navigate('/');
        } else {
            e.preventDefault();
            alert('Wrong credential !!!');
        }
    };
    return (
        <>
            <div className="slider-area " style={{ textAlign: 'center' }}>
                <h1 style={{ color: 'blue', paddingTop: 50 }}>Login</h1>
            </div>

            <section className="login_part section_padding " style={{ paddingTop: 50 }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <div className="login_part_text text-center">
                                <div className="login_part_text_iner">
                                    <h2>New to our Shop?</h2>
                                    <p>
                                        There are advances being made in science and technology everyday, and a good
                                        example of this is the
                                    </p>
                                    <Link to="/register" className="btn_3">
                                        Create an Account
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="login_part_form">
                                <div className="login_part_form_iner">
                                    <h3>
                                        Welcome Back ! <br /> Please Sign in now
                                    </h3>

                                    <form
                                        className="row contact_form"
                                        action="#"
                                        method="post"
                                        noValidate="novalidate"
                                        onSubmit={handleLogin}
                                    >
                                        <div className="col-md-12 form-group p_star">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="name"
                                                name="name"
                                                defaultValue=""
                                                placeholder="Username"
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>
                                        <div className="col-md-12 form-group p_star">
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="password"
                                                name="password"
                                                defaultValue=""
                                                onChange={(e) => setPassword(e.target.value)}
                                                placeholder="Password"
                                            />
                                        </div>
                                        <div className="col-md-12 form-group">
                                            <div className="creat_account d-flex align-items-center">
                                                <input type="checkbox" id="f-option" name="selector" />
                                                <label htmlFor="f-option">Remember me</label>
                                            </div>
                                            <button type="submit" defaultValue="submit" className="btn_3">
                                                log in
                                            </button>
                                            <Link className="lost_pass" to="#">
                                                forget password?
                                            </Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
