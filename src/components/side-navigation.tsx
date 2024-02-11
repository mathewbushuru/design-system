import { useNavigate } from "react-router-dom";

import Button from "@/components/primitives/button";

const examplesLinks = [
  { name: "Learn Company", link: "/examples/learn-company" },
  { name: "Twist & Dawkins LLP", link: "/examples/twist-dawkins" },
];

const compositesLinks = [
  { name: "Buttoned Input", link: "/composites/buttoned-input" },
];

const primitivesLinks = [
  { name: "Button", link: "/primitives/button" },
  { name: "Card", link: "/primitives/card" },
  { name: "Dropdown Menu", link: "/primitives/dropdown-menu" },
  { name: "Input", link: "/primitives/input" },
  { name: "Resizable", link: "/primitives/resizable" },
  { name: "Sheet", link: "/primitives/sheet" },
];

function SideNavigation() {
  const navigate = useNavigate();

  return (
    <div className=" flex h-full w-full flex-col gap-2 pb-8 pt-8 lg:pt-20">
      <Button
        variant="ghost"
        className="justify-start"
        onClick={() => navigate("/")}
      >
        Home
      </Button>

      {/* Examples  */}
      <Button
        variant="ghost"
        className="justify-start"
        onClick={() => navigate("/examples")}
      >
        Examples
      </Button>
      {examplesLinks.map((example) => (
        <Button
          key={example.link}
          variant="ghost"
          className="justify-start pl-8 pr-0 font-normal text-muted-foreground"
          onClick={() => navigate(example.link)}
        >
          {example.name}
        </Button>
      ))}

      {/* Component Composites  */}
      <Button
        variant="ghost"
        className="justify-start"
        onClick={() => navigate("/composites")}
      >
        Component Composites
      </Button>
      {compositesLinks.map((composite) => (
        <Button
          key={composite.link}
          variant="ghost"
          className="justify-start pl-8 pr-0 font-normal text-muted-foreground"
          onClick={() => navigate(composite.link)}
        >
          {composite.name}
        </Button>
      ))}

      {/* Component Primitives  */}
      <Button
        variant="ghost"
        className="justify-start"
        onClick={() => navigate("/primitives")}
      >
        Component Primitives
      </Button>
      {primitivesLinks.map((primitive) => (
        <Button
          key={primitive.link}
          variant="ghost"
          className="justify-start pl-8 pr-0 font-normal text-muted-foreground"
          onClick={() => navigate(primitive.link)}
        >
          {primitive.name}
        </Button>
      ))}
    </div>
  );
}

export default SideNavigation;
