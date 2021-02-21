import logo from "./logo.svg"
import { Link } from "wouter"

const Navigation = () => {
    return (
        <div>
            {/* <!-- ======= Header ======= --> */}
            <header id="header" className="fixed-top d-flex align-items-center header-transparent">
                <div className="container d-flex align-items-center">

                    {/* <!-- Uncomment below if you prefer to use an image logo --> */}
                    <Link href="/">
                        <a className="logo me-auto">
                            <img src={logo} alt="" className="img-fluid" />
                        </a>
                    </Link>

                    <nav id="navbar" className="navbar order-last order-lg-0">
                        <ul>
                            <li>
                                <Link href="/">
                                    <a className="nav-link scrollto active">Inicio</a>
                                </Link>
                            </li>

                            <li>
                                <Link href="/nosotros">
                                    <a className="nav-link scrollto">Sobre nosotros</a>
                                </Link>
                            </li>



                            <li className="dropdown">
                                <a href="#"><span>Explorar</span> <i className="bi bi-chevron-down"></i></a>
                                <ul>
                                    <li><a >Servicios</a></li>

                                    <li className="dropdown">
                                        <a href="#"><span>Cursos</span> <i className="bi bi-chevron-right"></i></a>
                                        <ul>
                                            <li>
                                                <a href="#">Todas las categorías</a>
                                            </li>

                                            <li>
                                                <a href="#">Desarrollo de Software</a>
                                            </li>

                                            <li>
                                                <a href="#">Matemáticas</a>
                                            </li>

                                            <li>
                                                <a href="#">Diseño</a>
                                            </li>

                                            <li>
                                                <a href="#">Negocios</a>
                                            </li>

                                            <li>
                                                <a href="#">Marketing</a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li><a href="#">Equipo</a></li>
                                    <li><a href="#">Contactar</a></li>

                                    <li>
                                        <Link href="/tabajos">
                                            <a>Trabajos</a>
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <Link href="/blog">
                                    <a className="nav-link scrollto">Blog</a>
                                </Link>
                            </li>

                            <li>
                                <Link href="/biblioteca">
                                    <a className="nav-link scrollto">Biblioteca</a>
                                </Link>
                            </li>

                        </ul>
                        <i className="bi bi-list mobile-nav-toggle"></i>
                    </nav>
                    {/* <!-- .navbar --> */}

                    <div className="social-links">
                        <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
                        <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                        <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
                        <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                    </div>

                </div>
            </header>

            {/* <!-- End Header --> */}

        </div>
    )
}

export default Navigation


