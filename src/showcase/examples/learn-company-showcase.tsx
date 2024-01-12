import ExampleShowcaseLayout from "@/layouts/example-showcase-layout";
import LearnCompany from "@/examples/learn-company/app";

function LearnCompanyShowcase() {
  return (
    <>
      <ExampleShowcaseLayout
        exampleName="LearnCompany"
        from="mathewbushuru/design-system"
        fromLink="https://github.com/mathewbushuru/design-system"
        design="coursera.org"
        designLink="https://www.coursera.org/"
        code="mathewbushuru/design-system"
        codeLink="https://github.com/mathewbushuru/design-system/blob/main/src/examples/learn-company"
      >
        <LearnCompany />
      </ExampleShowcaseLayout>
    </>
  );
}

export default LearnCompanyShowcase;
