import { Key, useState } from "react"
import Image, { StaticImageData } from "next/image"
import leo1 from "@/public/assets/img/leo-1.png"
import leo2 from "@/public/assets/img/leo-2.png"
import leo3 from "@/public/assets/img/leo-3.png"
import leo4 from "@/public/assets/img/leo-4.png"
import leo5 from "@/public/assets/img/leo-5.png"
import { cva } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

let images = [leo1, leo2, leo3, leo4, leo5]

const SelectedPhoto = (image: StaticImageData, index: Key) => (
  <TabsContent key={image.src} className="h-full" value={index.toString()}>
    <Image
      className="absolute h-full rounded-t-xl object-cover"
      src={image}
      alt="Leo Thompson"
    />
    <div className="bg-gradient-to-b from-transparent from-0% to-100% to-black h-full w-full absolute" />
  </TabsContent>
)

const tabVariants = cva("h-[4px] py-0 rounded-full w-full border-white", {
  variants: {
    active: {
      true: "bg-white",
      false: "bg-black/50",
    },
  },
})

export default function CurrentImage() {
  const [currentImage, setCurrentImage] = useState("0")
  const currentImageIndex = parseInt(currentImage)
  const nextImageValue =
    currentImageIndex >= images.length - 1
      ? "0"
      : (currentImageIndex + 1).toString()
  const prevImageValue =
    currentImageIndex <= 0
      ? (images.length - 1).toString()
      : (currentImageIndex - 1).toString()
  const Tab = (image: StaticImageData, index: Key) => (
    <div
      key={`trigger-${image.src}`}
      className={cn(tabVariants({ active: index === currentImageIndex }))}
    />
  )
  return (
    <Tabs className="" onValueChange={setCurrentImage} value={currentImage}>
      {images.map(SelectedPhoto)}
      <div className="absolute p-2.5 bg-transparent flex w-full gap-x-1.5 justify-between">
        {images.map(Tab)}
      </div>
      <TabsList className="p-0 bg-transparent absolute h-full justify-between flex w-full">
        {[prevImageValue, nextImageValue].map((value) => (
          <TabsTrigger
            key={`prev-next-${value}`}
            className="bg-transparent hover:bg-white/10 h-full w-[20%]"
            value={value}
          />
        ))}
      </TabsList>
    </Tabs>
  )
}
