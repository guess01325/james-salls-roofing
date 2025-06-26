import Services from "../components/Services";
import { Helmet } from "react-helmet";
import CTAButton from "../components/CTAButton";

function ServicesPage() {
  return (
    <div className="pt-20">
      <Helmet>
        <title>Roofing, Remodeling & Deck Services | James Salls Roofing</title>
        <meta
          name="description"
          content="Explore our full range of roofing, remodeling, siding, and deck services across Massachusetts."
        />
      </Helmet>

      <Services />
    </div>
  );
}

export default ServicesPage;
