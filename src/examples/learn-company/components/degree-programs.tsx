import { GraduationCap } from "lucide-react";

import Button from "@/components/primitives/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/primitives/card";

export default function DegreePrograms() {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 lg:p-8">
      <h3 className="mb-4 text-center font-semibold text-link sm:text-left">
        Degree programs
      </h3>
      <p className="mb-4 text-center text-3xl leading-10 text-foreground/90 sm:text-left">
        Find a top degree that fits your life
      </p>
      <p className="mb-8 text-center text-lg font-light leading-6 text-foreground/90 sm:text-left">
        Breakthrough pricing on 100% online degrees from top universities
      </p>
      <div className="mb-8 flex flex-col gap-8 sm:flex-row">
        <Card className="max-w-xs cursor-pointer transition-transform duration-300 sm:hover:scale-105">
          <CardHeader className="p-3">
            <img
              src="https://images.pexels.com/photos/137618/pexels-photo-137618.jpeg?auto=compress&cs=tinysrgb&h=192&dpr=2"
              alt="Glass building near tree grove"
              className="mb-4 h-48 max-w-xs rounded-md object-cover"
            />
            <CardTitle>
              <span className="text-xl">University of London</span>
            </CardTitle>
            <CardDescription>
              <span className="">Bachelor of Science in Computer Science</span>
            </CardDescription>
          </CardHeader>
          <CardContent className="p-3">
            <span className="flex items-center gap-1 text-sm font-light text-primary">
              <GraduationCap className="stroke-1" /> Earn a degree
            </span>
          </CardContent>
        </Card>

        <Card className="max-w-xs cursor-pointer transition-transform duration-300 sm:hover:scale-105">
          <CardHeader className="p-3">
            <img
              src="https://images.unsplash.com/photo-1692776691970-39dc4edfd870?q=80&h=384&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="A person walking in front of a building"
              className="mb-4 h-48 max-w-xs rounded-md object-cover"
            />
            <CardTitle>
              <span className="text-xl">University of British Columbia</span>
            </CardTitle>
            <CardDescription>
              <span className="">Master of Business Administration</span>
            </CardDescription>
          </CardHeader>
          <CardContent className="p-3">
            <span className="flex items-center gap-1 text-sm font-light text-primary">
              <GraduationCap className="stroke-1" /> Earn a degree
            </span>
          </CardContent>
        </Card>

        <Card className="max-w-xs cursor-pointer transition-transform duration-300 sm:hidden sm:hover:scale-105 lg:block">
          <CardHeader className="p-3">
            <img
              src="https://images.unsplash.com/photo-1576495199011-eb94736d05d6?q=80&h=384&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="People walking near paccar hall univeristy of washington during daytime"
              className="mb-4 h-48 max-w-xs rounded-md object-cover"
            />
            <CardTitle>
              <span className="text-xl">University of Washington</span>
            </CardTitle>
            <CardDescription>
              <span className="">Master of Applied Data Science</span>
            </CardDescription>
          </CardHeader>
          <CardContent className="p-3">
            <span className="flex items-center gap-1 text-sm font-light text-primary">
              <GraduationCap className="stroke-1" /> Earn a degree
            </span>
          </CardContent>
        </Card>
      </div>
      <div className="flex flex-col gap-2 sm:flex-row">
        <Button size="lg">Show 8 more</Button>
        <Button
          variant="outline"
          size="lg"
          className="border-primary bg-popover text-primary hover:text-primary"
        >
          View all
        </Button>
      </div>
    </div>
  );
}
