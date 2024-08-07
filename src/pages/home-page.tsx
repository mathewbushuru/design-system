import RootLayout from "@/layouts/root-layout";

import LogoSvg from "@/assets/logo-svg";

const HomePage = () => {
  return (
    <RootLayout>
      <div
        className="flex gap-8 p-6 pr-8 lg:pb-0 lg:pl-12"
        data-testid="home-page"
      >
        {/* Home page left  */}
        <div className="max-w-screen-lg flex-[3]">
          <h1 className="mt-4 font-serif text-3xl leading-10 ">
            My <br /> Design <br />
            System
          </h1>

          <p className="mt-4 text-base leading-8">
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

          <p className="mt-4 text-base  leading-8">
            Atoms are the basic building blocks of all matter. In this system,
            this consists of <em>Component Primitives</em> from{" "}
            <a
              href="https://www.radix-ui.com/primitives"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              Radix/UI{" "}
            </a>
            and{" "}
            <a
              href="https://react-spectrum.adobe.com/react-aria/getting-started.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              React Aria{" "}
            </a>
            .
          </p>

          <p className="mt-4  text-base leading-8">
            Molecules are groups of two or more atoms held together by chemical
            bonds. In this system, this translates to{" "}
            <em>Component Composites</em> which consists of related Component
            Primitives styled together. Component Composites, just like a
            combination of atoms in a molecule, take on distinct new properties,
            and become more tangible in the application.
          </p>

          <p className="mt-4  text-base leading-8">
            Organisms are assemblies of molecules functioning together as a
            unit. In this system, this is in form of <em>examples</em>. These
            are practical implemented designs of fictional companies that are
            based on real ones.
          </p>

          <p className="mt-4  text-base leading-8">
            I have also included an <em>animations</em> section. This is my
            playground of reusable animated components using Framer Motion and
            CSS animation properties.
          </p>

          <p className="mb-4 mt-4 text-base leading-8">
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
