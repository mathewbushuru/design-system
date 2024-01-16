import { Facebook, Linkedin, Twitter, Youtube, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <div className="bg-muted px-3 pb-6 pt-4 lg:px-5">
      <div className="mx-auto flex max-w-screen-xl flex-col items-center gap-4 sm:flex-row-reverse sm:justify-between sm:px-4">
        <p className="text-center text-foreground/90 sm:hidden">
          Learn Anywhere
        </p>
        <div className="flex items-center gap-4 text-foreground/90">
          <Facebook className="h-6 w-6" />
          <Linkedin className="h-6 w-6" />
          <Twitter className="h-6 w-6" />
          <Youtube className="h-6 w-6" />
          <Instagram className="h-6 w-6" />
        </div>
        <p className="text-center text-xs text-foreground/90">
          &copy;{new Date().getFullYear()} Learn Inc. All rights reserved.
        </p>
      </div>
    </div>
  );
}
