import RootLayout from "@/layouts/root-layout";

import ButtonedInputShowcase from "@/showcase/composites/buttoned-input-showcase";
import CompositeButtonsShowcase from "@/showcase/composites/composite-buttons-showcase";

const CompositesPage = () => {
  return (
    <RootLayout>
      <div data-testid="composites-page">
        <ButtonedInputShowcase />
        <CompositeButtonsShowcase />
      </div>
    </RootLayout>
  );
};

export default CompositesPage;
