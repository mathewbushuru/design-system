import ShowcaseLayout from "@/layouts/showcase-layout";
import TwistDawkins from "@/examples/twist-dawkins/app";

export default function TwistDawkinsShowcase() {
  return (
    <>
      <ShowcaseLayout
        name="Email Company"
        examplePage={true}
        from="shadcn/ui"
        fromLink="https://github.com/shadcn-ui/ui/blob/main/apps/www/app/examples/mail/page.tsx"
        code="mathewbushuru/design-system"
        codeLink="https://github.com/mathewbushuru/design-system/blob/main/src/examples/email-company/app.tsx"
      >
        <TwistDawkins />
      </ShowcaseLayout>
    </>
  );
}
