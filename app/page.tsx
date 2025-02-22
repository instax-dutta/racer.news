import Hero from "./components/Hero"
import Services from "./components/Services"
import Pricing from "./components/Pricing"
import PortfolioGrid from "./components/PortfolioGrid"
import ContactForm from "./components/ContactForm"

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Pricing />
      <PortfolioGrid />
      <ContactForm />
    </>
  )
}

