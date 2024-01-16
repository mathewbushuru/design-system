import Navbar from "@/examples/learn-company/components/navbar";
import Hero from "@/examples/learn-company/components/hero";
import PartnerCompanies from "@/examples/learn-company/components/partner-companies";
import DegreePrograms from "@/examples/learn-company/components/degree-programs";
import BusinessSubscription from "@/examples/learn-company/components/business-subscription";
import CallToAction from "@/examples/learn-company/components/call-to-action";
import Footer from "@/examples/learn-company/components/footer";

function LearnCompany() {
  return (
    <div className="bg-popover">
      <Navbar />
      <Hero />
      <PartnerCompanies />
      <DegreePrograms />
      <BusinessSubscription />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default LearnCompany;
