import RootLayout from "@/components/root-layout";

import LearnCompany from "@/showcase/examples/learn-company/app";

function ExamplesPage() {
  return (
    <RootLayout>
      <div className="p-4">
        Examples Page - Fully responsive designs inspired by real companies
        websites. (Put in resizable cards)
      </div>
      <div className="mx-4 lg:mx-6 border">
        <LearnCompany />
      </div>
    </RootLayout>
  );
}

export default ExamplesPage;
