import ShowcaseLayout from "@/layouts/showcase-layout";
import LearnCompany from "@/examples/learn-company/app";

function LearnCompanyShowcase() {
  return (
    <>
      <ShowcaseLayout
        name="Learn Company"
        examplePage={true}
        design="coursera.org"
        designLink="https://www.coursera.org/"
        code="mathewbushuru/design-system"
        codeLink="https://github.com/mathewbushuru/design-system/blob/main/src/examples/learn-company/app.tsx"
      >
        <LearnCompany />
      </ShowcaseLayout>
    </>
  );
}

export default LearnCompanyShowcase;
