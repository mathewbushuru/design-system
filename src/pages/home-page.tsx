import RootLayout from "@/layouts/root-layout";

import LogoSvg from "@/assets/logo-svg";

const HomePage = () => {
  return (
    <RootLayout>
      <div className="flex  gap-8 p-6 pr-8 lg:pl-12 lg:pt-12">
        {/* Home page left  */}
        <div className="max-w-screen-lg flex-[3]">
          <h1 className="mt-4 font-serif text-3xl leading-10 ">
            My <br /> Design <br />
            System
          </h1>

          <p className="mt-4 text-lg leading-8 sm:text-base">
            I have based my design system on{" "}
            <a
              href="https://atomicdesign.bradfrost.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              Atomic Design by Brad Frost
            </a>
            . This system consists of <em>atoms</em>, <em>molecules</em>, and{" "}
            <em>organisms</em>.
          </p>

          <p className="mt-4 text-lg leading-8  sm:text-base">
            Atoms are the basic building blocks of all matter. In this system,
            this consists of <em>Component Primitives</em> from{" "}
            <a
              href="https://react-spectrum.adobe.com/react-aria/getting-started.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              {" "}
              React Aria{" "}
            </a>
            and
            <a
              href="https://www.radix-ui.com/primitives"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              {" "}
              Radix/UI{" "}
            </a>
            that follow{" "}
            <a
              href="https://github.com/shadcn-ui/ui"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              {" "}
              Shadcn/UI's{" "}
            </a>
            styling.
          </p>

          <p className="mt-4 text-lg leading-8 sm:text-base">
            Molecules are groups of two or more atoms held together by chemical
            bonds. In this system, this translates to{" "}
            <em>Component Composites</em> which consists of related Component
            Primitives styled together. Component Composites, just like a
            combination of atoms in a molecule, take on distinct new properties,
            and become more tangible and operational.
          </p>

          <p className="mt-4 text-lg leading-8 sm:text-base">
            Organisms are assemblies of molecules functioning together as a
            unit. In this system, this is in form of <em>examples</em>. These are
            practical implemented designs of fictional companies that are based
            on real ones. Just like biological organisms which can range from
            single-celled organisms to incredibly sophisticated primates, these
            examples range from simple landing pages to fully operational web
            apps.
          </p>

          <p className="mb-4 mt-4 text-lg leading-8 sm:text-base">
            <a
              href="https://github.com/mathewbushuru/design-system"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              This project is open-source.
            </a>
          </p>
        </div>

        {/* Home page right  */}
        <div className="hidden flex-[2] items-center justify-center lg:flex">
          <LogoSvg className="w-60 fill-primary opacity-95" />
        </div>
      </div>
    </RootLayout>
  );
};

export default HomePage;
