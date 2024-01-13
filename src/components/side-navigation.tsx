import { useNavigate } from "react-router-dom";

import Button from "@/components/primitives/button";

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
      <Button
        variant="ghost"
        className="justify-start pl-8 pr-0 font-normal text-muted-foreground"
        onClick={() => navigate("/examples/learn-company")}
      >
        Learn Company
      </Button>

      {/* Components  */}
      <Button
        variant="ghost"
        className="justify-start"
        onClick={() => navigate("/components")}
      >
        Components
      </Button>
      <Button
        variant="ghost"
        className="justify-start pl-8 pr-0 font-normal text-muted-foreground"
        onClick={() => navigate("/components/button")}
      >
        Button
      </Button>
      <Button
        variant="ghost"
        className="justify-start pl-8 pr-0 font-normal text-muted-foreground"
        onClick={() => navigate("/components/drawer")}
      >
        Drawer
      </Button>
      <Button
        variant="ghost"
        className="justify-start pl-8 pr-0 font-normal text-muted-foreground"
        onClick={() => navigate("/components/dropdown-menu")}
      >
        Dropdown Menu
      </Button>
      <Button
        variant="ghost"
        className="justify-start pl-8 pr-0 font-normal text-muted-foreground"
        onClick={() => navigate("/components/input")}
      >
        Input
      </Button>
    </div>
  );
}

export default SideNavigation;
