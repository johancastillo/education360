import AboutSection from "../../components/about-section/AboutSection"
import BenefitsSection from "../../components/benefits-section/BenefitsSection"
import BtnToUp from "../../components/btn-to-up/BtnToUp"
import CallToAction from "../../components/call-to-action/CallToAction"
import ClientsSection from "../../components/clients-section/ClientsSection"
import CoverPage from "../../components/cover-page/CoverPage"
import FeaturesSection from "../../components/features-section/FeaturesSection"
import Footer from "../../components/footer/Footer"
import FrequentQuestion from "../../components/frequent-questions/FrequentQuestions"
import PopularCourses from "../../components/popular-courses/PopularCourses"
import PricingSection from "../../components/pricing-section/PricingSection"
import TeamSection from "../../components/team-section/TeamSection"
import Testimonials from "../../components/testimonials/Testimonials"
import WhyUsSection from "../../components/why-us-section/WhyUsSection"

const Home = () => {
  return (
    <>
      <CoverPage />

      <main id="main">

        <AboutSection />
        <BenefitsSection />
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
