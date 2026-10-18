import { PageSchema } from "../components/JsonLd";
import ServicesContent from "./ServicesContent";

// Server wrapper so the schema is only on /services, not on /services/branding too.
export default function ServicesPage() {
  return (
    <>
      <PageSchema slug="services" path="/services" />
      <ServicesContent />
    </>
  );
}
