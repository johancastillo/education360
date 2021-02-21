// Dependencies
import {Switch, Route, Router, Link} from 'wouter'
// Pages
import BlogHome from './blog/blog-home/BlogHome'
import Navigation from './components/navigation/Navigation'
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
      <Navigation />


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
