import { ChevronDown } from "lucide-react";

import Button from "@/components/primitives/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuPortal,
} from "@/components/primitives/dropdown-menu";

export default function ExploreButton() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="sm" className="hidden lg:inline-flex">
          <span>Explore</span>
          <ChevronDown className="ml-0.5 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64 pb-2">
        <DropdownMenuLabel>Goals</DropdownMenuLabel>
        <DropdownMenuItem>Take a free course</DropdownMenuItem>
        <DropdownMenuItem>Earn a degree</DropdownMenuItem>
        <DropdownMenuItem>Earn a certificate</DropdownMenuItem>
        <DropdownMenuItem>Find your new career</DropdownMenuItem>
        <DropdownMenuSeparator />

        <DropdownMenuLabel>Subjects</DropdownMenuLabel>
        {subjects.map((subject) => (
          <DropdownMenuSub key={subject.name}>
            <DropdownMenuSubTrigger>{subject.name}</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent className="mb-2 ml-1 w-52 pb-2">
                <DropdownMenuLabel>Get Started</DropdownMenuLabel>
                <DropdownMenuItem>Launch your career</DropdownMenuItem>
                <DropdownMenuItem>Free courses</DropdownMenuItem>
                <DropdownMenuItem>Most popular</DropdownMenuItem>
                <DropdownMenuItem>New courses</DropdownMenuItem>
                <DropdownMenuSeparator />

                <DropdownMenuLabel>Popular Skills</DropdownMenuLabel>
                {subject.popularSkills.map((skill) => (
                  <DropdownMenuItem key={skill}>{skill}</DropdownMenuItem>
                ))}
                <Button
                  variant="outline"
                  size="sm"
                  className="ml-2 mt-2 bg-popover"
                >
                  View all skills
                </Button>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        ))}
        <Button variant="outline" size="sm" className="ml-2 mt-2 bg-popover">
          Browse all subjects
        </Button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

const subjects = [
  {
    name: "Data Science",
    popularSkills: [
      "Python",
      "SQL",
      "Microsoft Excel",
      "Machine Learning",
      "Data Science",
      "Data Analytics",
      "Power BI",
      "Artificial Intelligence",
      "Statistics",
    ],
  },
  {
    name: "Business",
    popularSkills: [
      "Project Management",
      "Power BI",
      "Microsoft Excel",
      "Digital Marketing",
      "Blockchain",
    ],
  },
  {
    name: "Computer Science",
    popularSkills: [
      "Python",
      "SQL",
      "Cybersecurity",
      "Java",
      "Web Development",
      "C++",
      "Artificial Intelligence",
      "AWS",
    ],
  },
  {
    name: "Health",
    popularSkills: [
      "Bioinformatics",
      "Psychology",
      "Medical",
      "Neuroscience",
      "Mental Health",
      "Anatomy",
    ],
  },
  {
    name: "Math and Logic",
    popularSkills: [
      "Mathematics",
      "Calculus",
      "Linear Algebra",
      "Probability",
      "Optimization",
      "Discrete Calculus",
    ],
  },
];
