import RootLayout from "@/layouts/root-layout";

const HomePage = () => {
  return (
    <RootLayout>
      <div className="p-6 pr-8 max-w-screen-lg">
        <h1 className="mt-4 font-serif text-3xl leading-10 ">
          My <br /> Design <br />
          System
        </h1>

        <p className="mt-4 text-lg leading-8 sm:text-base">
          I have based my design system on{" "}
          <a
            href="https://atomicdesign.bradfrost.com/chapter-2/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            Atomic Design by Brad Frost
          </a>
          . This system consists of <em className="font-light">atoms</em>,{" "}
          <em className="font-light">molecules</em>, and{" "}
          <em className="font-light">organisms</em>.
        </p>

        <p className="mt-4 text-lg leading-8  sm:text-base">
          Atoms are the basic building blocks of all matter. In this system,
          this consists of Component Primitives from{" "}
          <a
            href="https://www.radix-ui.com/primitives"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            Radix/UI
          </a>{" "}
          and{" "}
          <a
            href="https://react-spectrum.adobe.com/react-aria/getting-started.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            {" "}
            React Aria{" "}
          </a>
          that follow{" "}
          <a
            href="https://github.com/shadcn-ui/ui"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            {" "}
            Shadcn/ui's{" "}
          </a>
          styling.
        </p>

        <p className="mt-4 text-lg leading-8 sm:text-base">
          Molecules are groups of two or more atoms held together by chemical
          bonds. In this system, this consists of related primitives styled
          together. I refer to them here as Component Composites. For example,
          the ButtonedInput is an Input with an Icon Button immediately to its
          right. Component Composites, just like a combinations of atoms in a
          molecule, take on their own unique properties, and become more
          tangible and operational than atoms.
        </p>

        <p className="mt-4 text-lg leading-8 sm:text-base">
          Organisms are assemblies of molecules functioning together as a unit.
          In this system, this is in form of examples. These are fully
          implemented designs of fictional companies that are based on real
          ones. Just like biological organisms which can range from
          single-celled organisms to incredibly sophisticated primates, these examples range from simple landing pages to fully
          operational web apps.
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
    </RootLayout>
  );
};

export default HomePage;
