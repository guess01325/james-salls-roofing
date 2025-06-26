import Hero from "../components/Hero";
import Services from "../components/Services"; // we’ll build this next
import { Helmet } from "react-helmet";
import CTAButton from "../components/CTAButton";

function Home() {
  return (
    <>
    <Helmet>
  <title>Roofing, Remodeling & Deck Services | James Salls Roofing</title>
  <meta name="description" content="Explore our full range of roofing, remodeling, siding, and deck services across Massachusetts." />
</Helmet>
      <Hero />
      <Services />
    </>
  );
}

export default Home;