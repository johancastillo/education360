import logo from "./logo.svg"
import { Link } from "wouter"
import { useState } from "react"

const Navigation = () => {
    const [mobile, setMobile] = useState(false)
    const handleMenu = () => setMobile(!mobile)

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

                    <nav id="navbar" className={mobile ? "navbar order-last order-lg-0 navbar-mobile" : "navbar order-last order-lg-0"}>
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
                                    <li>
                                        <Link href="/seRvicios">
                                            <a >Servicios</a>
                                        </Link>
                                    </li>

                                    <li className="dropdown">
                                        <Link href="/cursos">
                                            <a>
                                                <span>Cursos</span> <i className="bi bi-chevron-right"></i>
                                            </a>
                                        </Link>

                                        <ul>
                                            <li>
                                                <Link href="/cursos/categorias">
                                                    <a>Todas las categorías</a>
                                                </Link>
                                            </li>

                                            <li>
                                                <Link href="/cursos/categorias/software">
                                                    <a>Desarrollo de Software</a>
                                                </Link>
                                            </li>

                                            <li>
                                                <Link href="/cursos/categorias/matematicas">
                                                    <a>Matemáticas</a>
                                                </Link>
                                            </li>

                                            <li>
                                                <Link href="/cursos/categorias/diseno">
                                                    <a href="#">Diseño</a>
                                                </Link>
                                            </li>

                                            <li>
                                                <Link href="/cursos/categorias/negocios">
                                                    <a>Negocios</a>
                                                </Link>
                                            </li>

                                            <li>
                                                <Link href="/cursos/categorias/marketing">
                                                    <a>Marketing</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li>
                                        <Link href="/equipo">
                                            <a href="#">Equipo</a>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="/contacto">
                                            <a>Contactar</a>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="/trabajos">
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

                        <i className={mobile ? "bi mobile-nav-toggle bi-x" : "bi bi-list mobile-nav-toggle"} onClick={handleMenu}></i>
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


