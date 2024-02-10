import RootLayout from "@/layouts/root-layout";

import LearnCompanyShowcase from "@/showcase/examples/learn-company-showcase";
import EmailCompanyShowcase from "@/showcase/examples/email-company-showcase";

function ExamplesPage() {
  return (
    <RootLayout>
      <div>
        <LearnCompanyShowcase />
        <EmailCompanyShowcase />
      </div>
    </RootLayout>
  );
}

export default ExamplesPage;
