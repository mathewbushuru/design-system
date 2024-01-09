// https://ui.shadcn.com/docs/components/button

import { Heart } from "lucide-react"

import Button from "@/components/ui/button"

export default function ButtonShowcase(){
    return <div className="border border-border py-6 px-12 rounded-md">
        <p>Default button</p>
        <Button>Default button</Button>

        <p>Disabled button</p>
        <Button disabled>Disabled</Button>

        <h1 className="mt-4 font-semibold underline">Variants</h1>
        <h3 className="mt-1">Default</h3>
        <Button variant="default">Default button</Button>

        <h3 className="mt-1">Destructive</h3>
        <Button variant="destructive">Destructive button</Button>

        <h3 className="mt-1">Outline</h3>
        <Button variant="outline">Outline button</Button>

        <h3 className="mt-1">Secondary</h3>
        <Button variant="secondary">Secondary button</Button>

        <h3 className="mt-1">Ghost</h3>
        <Button variant="ghost">Ghost button</Button>

        <h3 className="mt-1">Link</h3>
        <Button variant="link">Link button</Button>

        <h1 className="mt-4 font-semibold underline">Sizes</h1>
        <h3 className="mt-1">Default</h3>
        <Button size="default">Default button</Button>

        <h3 className="mt-1">Small</h3>
        <Button size="sm">Small button</Button>

        <h3 className="mt-1">Large</h3>
        <Button size="lg">Large button</Button>

        <h3 className="mt-1">Icon</h3>
        <Button size="icon">
            <Heart className="h-4 w-4" />
        </Button>
    </div>
}