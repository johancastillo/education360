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
                                <Link href="/" onClick={mobile ? handleMenu : ""}>
                                    <a className="nav-link scrollto active">Inicio</a>
                                </Link>
                            </li>

                            <li>
                                <Link href="/nosotros"  onClick={mobile ? handleMenu : ""}>
                                    <a className="nav-link scrollto">Sobre nosotros</a>
                                </Link>
                            </li>

                            <div class="accordion accordion-flush" id="accordionFlushExample" style={mobile ? {} : {display: "none"}}>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingOne">
                                        <button class="accordion-button collapsed text-uppercase" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                            <li><a className="p-0">Explorar</a></li>
                                        </button>
                                    </h2>

                                    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                        <Link href="/servicios" onClick={handleMenu}>
                                            <a style={{fontWeight: "400"}}>
                                                <span>Servicios</span>
                                            </a>
                                        </Link>

                                        <Link href="/cursos" onClick={handleMenu}>
                                            <a style={{fontWeight: "400"}}>
                                                <span>Cursos</span>
                                            </a>
                                        </Link>

                                        <Link href="/equipo" onClick={handleMenu}>
                                            <a style={{fontWeight: "400"}}>
                                                <span>Equipo</span>
                                            </a>
                                        </Link>

                                        <Link href="/contacto" onClick={handleMenu}>
                                            <a style={{fontWeight: "400"}}>
                                                <span>Contactar</span>
                                            </a>
                                        </Link>

                                        <Link href="/trabajos" onClick={handleMenu}>
                                            <a style={{fontWeight: "400"}}>
                                                <span>Trabajos</span>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingTwo">
                                        <button class="accordion-button collapsed text-uppercase" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                           <li>
                                               <a className="p-0">Mi cuenta</a>
                                            </li> 
                                        </button>
                                    </h2>

                                    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                        <Link href="/mi-perfil" onClick={handleMenu}>
                                            <a style={{fontWeight: "400"}}>
                                                <span>Mi perfil</span>
                                            </a>
                                        </Link>

                                        <Link href="/mis-cursos" onClick={handleMenu}>
                                            <a style={{fontWeight: "400"}}>
                                                <span>Mis cursos</span>
                                            </a>
                                        </Link>

                                        <Link href="/mis-cursos" onClick={handleMenu}>
                                            <a style={{fontWeight: "400"}}>
                                                <span>Cerrar sesión</span>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                                
                            </div>


                            <li className="dropdown">
                                <a href="#"><span>Explorar</span> <i className="bi bi-chevron-down"></i></a>
                                <ul>
                                    <li>
                                        <Link href="/servicios">
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
                                <Link href="/blog" onClick={mobile ? handleMenu : ""}>
                                    <a className="nav-link scrollto">Blog</a>
                                </Link>
                            </li>

                            <li>
                                <Link href="/biblioteca" onClick={mobile ? handleMenu : ""}>
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


