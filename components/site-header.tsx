import Image from "next/image"
import Link from "next/link"
import hinder from "@/public/hinder.svg"
import { Bell, Sliders, SlidersHorizontal } from "lucide-react"

export function SiteHeader() {
  return (
    <header className="bg-background p-4 sticky items-center flex justify-between top-0 z-40 w-full border-b">
      <Link
        href="/"
        className="flex text-3xl font-[600] -tracking-[0.06em] text-primary items-center space-x-2"
      >
        <Image className="size-8" src={hinder} alt="Hinder" />
        hinder
      </Link>
      <div className="flex gap-4">
        <Bell className="fill-foreground" />
        <SlidersHorizontal />
      </div>
    </header>
  )
}
