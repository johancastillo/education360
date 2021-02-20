// Dependencies
import {Switch, Route, Router, Link} from 'wouter'
// Pages
import BlogHome from './blog/blog-home/BlogHome'
import LibraryHome from './library/library-home/LibraryHome'
import AboutUs from './pages/about-us/AboutUs'
import ContactUs from './pages/contact-us/ContactUs'
import Courses from './pages/courses/Courses'
import Home from './pages/home/Home'
import Services from './pages/services/Services'
import Team from './pages/team/Team'

const RoutesApp = () => {
  return (
    <Router>
      <ul>
        <Link href="/"><a className="mx-2">Inicio</a></Link>
        <Link href="/servicios"><a className="mx-2">Servicios</a></Link>
        <Link href="/nosotros"><a className="mx-2">Sobre nosotros</a></Link>
        <Link href="/contacto"><a className="mx-2">Contacto</a></Link>
        <Link href="/equipo"><a className="mx-2">Equipo</a></Link>
        <Link href="/cursos"><a className="mx-2">Cursos</a></Link>
        <Link href="/blog"><a className="mx-2">Blog</a></Link>
        <Link href="/biblioteca"><a className="mx-2">Biblioteca</a></Link>
      </ul>

      <Switch>
        <Route path="/" component={Home} />
        <Route path="/servicios" component={Services} />
        <Route path="/nosotros" component={AboutUs} />
        <Route path="/contacto" component={ContactUs} />
        <Route path="/equipo" component={Team} />
        <Route path="/cursos" component={Courses} />
        <Route path="/blog" component={BlogHome} />
        <Route path="/biblioteca" component={LibraryHome} />
      </Switch>

    </Router>
  )
}

export default RoutesApp;
