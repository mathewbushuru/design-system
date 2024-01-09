import { Github } from "lucide-react";

function Footer() {
  return (
    <div className="bg-primary py-3 text-primary-foreground dark:bg-background dark:border-t">
      <a
        href="https://github.com/mathewbushuru/design-system"
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-center"
      >
        <Github className="h-6 w-6 peer rounded-md hover:p-0.5" />
      </a>
    </div>
  );
}

export default Footer;
