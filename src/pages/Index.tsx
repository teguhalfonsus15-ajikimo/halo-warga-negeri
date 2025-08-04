import Hero from "@/components/Hero";
import Features from "@/components/Features";
import CaseStudies from "@/components/CaseStudies";
import ForCitizens from "@/components/ForCitizens";
import ForGovernment from "@/components/ForGovernment";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <CaseStudies />
      <ForCitizens />
      <ForGovernment />
      <Partners />
      <Footer />
    </div>
  );
};

export default Index;
