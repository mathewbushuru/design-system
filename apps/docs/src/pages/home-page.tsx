import Navbar from "@/components/navbar"

export default function HomePage() {
  return (
    <div className="flex flex-col lg:flex-row">
    <Navbar />

    <div className="flex flex-col gap-2 p-12">
      Homepage
    </div>
  </div>
  )
}
