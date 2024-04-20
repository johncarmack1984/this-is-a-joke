import { ArrowUpIcon, HomeIcon, MapPinIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"

export default function DemographicInfo() {
  return (
    <div className="absolute w-full bottom-0 p-4">
      <div className="flex w-full items-center justify-between">
        <Badge variant="secondary" className="bg-white text-black">
          Active
        </Badge>
        <ArrowUpIcon className="text-white" />
      </div>
      <div className="mt-4">
        <h1 className="text-3xl font-bold">Leo 23</h1>
        <div className="flex items-center mt-1">
          <HomeIcon className="text-white mr-2" />
          <span>Lives in Costa Mesa</span>
        </div>
        <div className="flex items-center mt-1">
          <MapPinIcon className="text-white mr-2" />
          <span>38 miles away</span>
        </div>
      </div>
    </div>
  )
}
