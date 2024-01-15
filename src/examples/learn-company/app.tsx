import { ExternalLink } from "lucide-react";

import Navbar from "@/examples/learn-company/components/navbar";
import Hero from "@/examples/learn-company/components/hero";
import PartnerCompanies from "@/examples/learn-company/components/partner-companies";
import DegreePrograms from "@/examples/learn-company/components/degree-programs";

import Button from "@/components/primitives/button";

function LearnCompany() {
  return (
    <div className="bg-popover pb-12 lg:pb-24">
      <Navbar />
      <Hero />
      <PartnerCompanies />
      <DegreePrograms />
      <div className="flex flex-col bg-muted p-4 lg:p-8 lg:flex-row">
        <div className="mx-auto max-w-lg lg:flex-1">
          <h1 className="mb-4 mt-8 px-2 text-center text-2xl sm:text-left sm:mb-6">
            The ideal solution for your business
          </h1>
          <p className="mb-4 px-2 text-center text-foreground/80 sm:text-left sm:mb-6">
            Get the world-class learning and development chosen by top teams
            across the globe. All on Learn for Business.
          </p>
          <Button size="lg" className="mb-4 w-full sm:mb-6">
            Discover Learn for Business
          </Button>
          <p className="text-center text-foreground/80 sm:text-left">
            Upskill a small team?{" "}
            <span className="inline-flex text-link underline underline-offset-2">
              Check out Learn for Teams{" "}
              <ExternalLink className="my-auto ml-1 h-5 w-4 stroke-2" />
            </span>
          </p>
        </div>
        <div className="lg:flex-1">Logos</div>
      </div>
    </div>
  );
}

export default LearnCompany;
