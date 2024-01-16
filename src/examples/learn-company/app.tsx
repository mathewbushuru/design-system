import Navbar from "@/examples/learn-company/components/navbar";
import Hero from "@/examples/learn-company/components/hero";
import PartnerCompanies from "@/examples/learn-company/components/partner-companies";
import DegreePrograms from "@/examples/learn-company/components/degree-programs";
import BusinessSubscription from "@/examples/learn-company/components/business-subscription";
import CallToAction from "@/examples/learn-company/components/call-to-action";

function LearnCompany() {
  return (
    <div className="bg-popover pb-12 lg:pb-24">
      <Navbar />
      <Hero />
      <PartnerCompanies />
      <DegreePrograms />
      <BusinessSubscription />
      <CallToAction />
    </div>
  );
}

export default LearnCompany;
