import ShowcaseLayout from "@/layouts/showcase-layout";
import TwistDawkins from "@/examples/twist-dawkins/app";

export default function TwistDawkinsShowcase() {
  return (
    <>
      <ShowcaseLayout
        name="Twist & Dawkins LLP"
        examplePage={true}
        design="Kirkland & Ellis"
        designLink="https://www.kirkland.com/"
        code="mathewbushuru/design-system"
        codeLink="https://github.com/mathewbushuru/design-system/blob/main/src/examples/twist-dawkins/app.tsx"
      >
        <TwistDawkins />
      </ShowcaseLayout>
    </>
  );
}
