import RootLayout from "@/components/root-layout";

import LearnCompany from "@/showcase/examples/learn-company";

function ExamplesPage() {
  return (
    <RootLayout>
      ExamplesPage(Carousel of example projects)
      <div className="border m-4">
        <LearnCompany />
      </div>
    </RootLayout>
  );
}

export default ExamplesPage;
