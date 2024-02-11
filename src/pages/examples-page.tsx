import RootLayout from "@/layouts/root-layout";

import LearnCompanyShowcase from "@/showcase/examples/learn-company-showcase";
import TwistDawkinsShowcase from "@/showcase/examples/twist-dawkins-showcase";

function ExamplesPage() {
  return (
    <RootLayout>
      <div>
        <LearnCompanyShowcase />
        <TwistDawkinsShowcase />
      </div>
    </RootLayout>
  );
}

export default ExamplesPage;
