import { BellRing, Check } from "lucide-react";

import ShowcaseLayout from "@/layouts/showcase-layout";
import Button from "@/components/primitives/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/primitives/card";

export default function CardShowcase() {
  return (
    <ShowcaseLayout
      name="Card"
      from="shadcn/ui"
      fromLink="https://github.com/shadcn-ui/ui"
      code="mathewbushuru/design-system"
      codeLink="https://github.com/mathewbushuru/design-system/blob/main/src/components/primitives/card.tsx"
      uses="HTML Div Element"
      usesLink="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div"
    >
      <h1 className="my-4 text-center font-semibold text-muted-foreground sm:text-left">
        Default card
      </h1>
      <div className="sm:max-w-md">
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card content</p>
          </CardContent>
          <CardFooter>
            <p>Card footer</p>
          </CardFooter>
        </Card>
      </div>

      <h1 className="my-4 text-center font-semibold text-muted-foreground sm:text-left">
        Notifications card
      </h1>
      <div className="sm:max-w-md">
        <Card className="sm:w-96">
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>You have {notifications.length} unread messages.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="hidden sm:flex items-center gap-4 border rounded-md p-4">
              <BellRing />
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">Push Notifications</p>
                <p className="text-sm text-muted-foreground">Send notifications to device</p>
              </div>
              <Button size="sm">Send</Button>
            </div>
            <div>
              {
                notifications.map((notification,index) => (
                  <div 
                    key={index}
                    className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:pb-0 last:mb-0"
                    >
                      <span className="h-2 w-2 bg-primary/80 rounded-full flex translate-y-1" />
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">
                          {notification.title}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {notification.description}
                        </p>
                      </div>
                    </div>
                ))
              }
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">
              <Check className="mr-2 w-4 h-4" />
              <span>Mark all as read</span>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </ShowcaseLayout>
  );
}

const notifications = [
  {
    title: "Your call has been confirmed.",
    description: "1 hour ago",
  },
  {
    title: "You have a new message!",
    description: "1 hour ago",
  },
  {
    title: "Your subscription is expiring soon!",
    description: "2 hours ago",
  },
]
