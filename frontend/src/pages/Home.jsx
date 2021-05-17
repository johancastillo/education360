import AboutSection from "../components/AboutSection"
import ServicesSection from "../components/ServicesSection"
import BtnToUp from "../components/BtnToUp"
import CallToAction from "../components/CallToAction"
import ClientsSection from "../components/ClientsSection"
import CoverPage from "../components/CoverPage"
import FeaturesSection from "../components/FeaturesSection"
import Footer from "../components/Footer"
import FrequentQuestion from "../components/FrequentQuestions"
import PopularCourses from "../components/PopularCourses"
import PricingSection from "../components/PricingSection"
import TeamSection from "../components/TeamSection"
import Testimonials from "../components/Testimonials"
import WhyUsSection from "../components/WhyUsSection"
import Counter from "../components/Counter"

const Home = () => {
  return (
    <>
      <CoverPage />
      <Counter />

      <main id="main">

        <AboutSection />
        <ServicesSection />
        <WhyUsSection />
        <CallToAction />
        <FeaturesSection />
        <PopularCourses />
        <Testimonials />
        <TeamSection />
        <ClientsSection />
        <PricingSection />
        <FrequentQuestion />

      </main>

      <Footer />
      <BtnToUp />

    </>
  )
}

export default Home
