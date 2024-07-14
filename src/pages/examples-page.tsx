import RootLayout from "@/layouts/root-layout";

import LearnCompanyShowcase from "@/showcase/examples/learn-company-showcase";
import TwistDawkinsShowcase from "@/showcase/examples/twist-dawkins-showcase";

function ExamplesPage() {
  return (
    <RootLayout>
      <div>
        <LearnCompanyShowcase />
        <div className="my-8 h-px bg-primary/50 sm:hidden" />
        <div className="my-10 hidden sm:block" />

        <TwistDawkinsShowcase />
      </div>
    </RootLayout>
  );
}

export default ExamplesPage;
