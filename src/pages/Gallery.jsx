import Gallery from "../components/Gallery";
import { Helmet } from "react-helmet";
import CTAButton from "../components/CTAButton";

function GalleryPage() {
  return (
    <div className="pt-20">
      <Helmet>
  <title>Project Gallery | James Salls Roofing & Remodeling</title>
  <meta name="description" content="See before-and-after photos of our recent roofing, remodeling, and deck projects in Massachusetts." />
</Helmet>
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">
  Project Gallery
</h1>

      <Gallery />
    </div>
  );
}

export default GalleryPage;