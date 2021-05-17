// Dependencies
import {Switch, Route, Router, Link} from 'wouter'
// Pages
import BlogHome from './blog/BlogHome'
import Navigation from './components/Navigation'
import LibraryHome from './library/LibraryHome'
import AboutUs from './pages/AboutUs'
import Categories from './pages/Categories'
import ContactUs from './pages/ContactUs'
import CourseCategory from './pages/CourseCategory'
import CourseDetails from './pages/CourseDetails'
import Courses from './pages/Courses'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import ResetPassword from './pages/ResetPassword'
import Services from './pages/Services'
import Team from './pages/Team'
import WorksHome from './works/WorksHome'

const RoutesApp = () => {
  return (
    <Router>
      <Navigation />


      <Switch>
        <Route path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/servicios" component={Services} />
        <Route path="/nosotros" component={AboutUs} />
        <Route path="/explorar" component={AboutUs} />
        <Route path="/reset-password" component={ResetPassword} />
        <Route path="/contacto" component={ContactUs} />
        <Route path="/cursos/categorias" component={Categories} />
        <Route path="/cursos/categorias/:title" component={CourseCategory} />
        <Route path="/cursos/:title" component={CourseDetails} />

        <Route path="/equipo" component={Team} />
        <Route path="/cursos" component={Courses} />
        <Route path="/blog" component={BlogHome} />
        <Route path="/biblioteca" component={LibraryHome} />
        <Route path="/trabajos" component={WorksHome} />
      </Switch>

    </Router>
  )
}

export default RoutesApp;
