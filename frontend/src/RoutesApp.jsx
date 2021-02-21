// Dependencies
import {Switch, Route, Router, Link} from 'wouter'
// Pages
import BlogHome from './blog/blog-home/BlogHome'
import Navigation from './components/navigation/Navigation'
import LibraryHome from './library/library-home/LibraryHome'
import AboutUs from './pages/about-us/AboutUs'
import Categories from './pages/categories/Categories'
import ContactUs from './pages/contact-us/ContactUs'
import CourseCategory from './pages/course-category/CourseCategory'
import Courses from './pages/courses/Courses'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import ResetPassword from './pages/reset-password/ResetPassword'
import Services from './pages/services/Services'
import Team from './pages/team/Team'
import WorksHome from './works/works-home/WorksHome'

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
