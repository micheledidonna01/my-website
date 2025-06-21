import { Link } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css';



function Footer() {
    return (
        <footer className="bg-dark text-light py-4  mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-12 text-center text-md-start">
                        <ul className="list-unstyled ">
                            <li>
                                <Link to="/" className="ms-2 text-decoration-none text-white">
                                    Developer Mike
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/projects"
                                    className="ms-2 text-decoration-none text-white"
                                >
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contacts"
                                    className="ms-2 text-decoration-none text-white"
                                >
                                    Contacts
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6 text-center col-sm-12 pb-4">
                        <p className="mb-1">
                            © 2025
                            <Link to="/" className="ms-2 text-decoration-none text-secondary">
                                Developer Mike
                            </Link>
                        </p>
                        <p className="mb-1">Cellulare: 3388546403</p>
                        <p className="mb-1">
                            Nel caso vi sia piaciuto il mio profilo, o volete contattarmi per qualsiasi cosa, mandate una mail a:
                        </p>
                        <div className="pt-1">
                        <i className="bi bi-arrow-bar-down text-white"></i><i className="bi bi-arrow-bar-down text-white"></i><i className="bi bi-arrow-bar-down text-white"></i><i className="bi bi-arrow-bar-down text-white"></i><i className="bi bi-arrow-bar-down text-white"></i><i className="bi bi-arrow-bar-down text-white"></i><i className="bi bi-arrow-bar-down text-white"></i><i className="bi bi-arrow-bar-down text-white"></i><i className="bi bi-arrow-bar-down text-white"></i><i className="bi bi-arrow-bar-down text-white"></i><i className="bi bi-arrow-bar-down text-white"></i><i className="bi bi-arrow-bar-down text-white"></i>
                        </div>
                        <p className="mb-1 ">
                            <a href="mailto:micheledidonna337@gmail.com" className="text-decoration-none text-secondary">
                                micheledidonna337@gmail.com
                            </a>
                        </p>
                        <div> 
                        <i className="bi bi-arrow-bar-up text-white"></i><i className="bi bi-arrow-bar-up text-white"></i><i className="bi bi-arrow-bar-up text-white"></i><i className="bi bi-arrow-bar-up text-white"></i><i className="bi bi-arrow-bar-up text-white"></i><i className="bi bi-arrow-bar-up text-white"></i><i className="bi bi-arrow-bar-up text-white"></i><i className="bi bi-arrow-bar-up text-white"></i><i className="bi bi-arrow-bar-up text-white"></i><i className="bi bi-arrow-bar-up text-white"></i><i className="bi bi-arrow-bar-up text-white"></i><i className="bi bi-arrow-bar-up text-white"></i>
                        </div>
                    </div>

                    <div className="col-md-3 text-md-end text-center col-12 ">
                        <h6>Seguici sui social</h6>
                        <div className="d-flex justify-content-md-end justify-content-center">
                            
                            <a
                                href="https://www.facebook.com/"
                                target="_blank"
                                className="text-light me-2"
                            >
                                <i className="fa-brands fa-facebook"></i>
                            </a>
                            <a
                                href="https://twitter.com/"
                                target="_blank"
                                className="text-light me-2"
                            >
                                <i className="fa-brands fa-twitter"></i>
                            </a>
                            <a
                                href="https://www.instagram.com/"
                                target="_blank"
                                className="text-light me-2"
                            >
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                            <a
                                href="https://it.linkedin.com/"
                                target="_blank"
                                className="text-light me-2"
                            >
                                <i className="fa-brands fa-linkedin"></i>
                            </a>
                            <a
                                href="https://it.pinterest.com/"
                                target="_blank"
                                className="text-light me-2"
                            >
                                <i className="fa-brands fa-pinterest"></i>
                            </a>
                            <a
                                href="https://www.youtube.com/"
                                target="_blank"
                                className="text-light me-2"
                            >
                                <i className="fa-brands fa-youtube"></i>
                            </a>
                            <a
                                href="https://www.tiktok.com/"
                                target="_blank"
                                className="text-light"
                            >
                                <i className="fa-brands fa-tiktok"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
