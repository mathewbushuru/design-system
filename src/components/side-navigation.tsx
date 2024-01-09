import { useNavigate } from "react-router-dom";

import Button from "@/components/ui/button";

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
      <Button
        variant="ghost"
        className="justify-start"
        onClick={() => navigate("/showcase")}
      >
        Showcase
      </Button>
    </div>
  );
}

export default SideNavigation;
