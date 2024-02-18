import Header from "@/examples/twist-dawkins/components/header";
import OverviewSection from "@/examples/twist-dawkins/components/overview-section";
import StatsSection from "@/examples/twist-dawkins/components/stats-section";
import ServicesSection from "@/examples/twist-dawkins/components/services-section";
import WhoWeAreSection from "@/examples/twist-dawkins/components/who-we-are-section";
import NewsSection from "@/examples/twist-dawkins/components/news-section";
import CharitySection from "@/examples/twist-dawkins/components/charity-section";
import Footer from "@/examples/twist-dawkins/components/footer";

export default function TwistDawkins() {
  return (
    <div className="bg-popover">
      <Header />
      <OverviewSection />
      <StatsSection />
      <ServicesSection />
      <WhoWeAreSection />
      <NewsSection />
      <CharitySection />
      <Footer />
    </div>
  );
}
