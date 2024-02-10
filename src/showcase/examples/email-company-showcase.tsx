import ShowcaseLayout from "@/layouts/showcase-layout";
import EmailCompany from "@/examples/email-company/app";

function EmailCompanyShowcase() {
  return (
    <>
      <ShowcaseLayout
        name="Email Company"
        examplePage={true}
        from="shadcn/ui"
        fromLink="https://github.com/shadcn-ui/ui"
        code="mathewbushuru/design-system"
        codeLink="https://github.com/mathewbushuru/design-system/blob/main/src/examples/email-company/app.tsx"
      >
        <EmailCompany />
      </ShowcaseLayout>
    </>
  );
}

export default EmailCompanyShowcase;
