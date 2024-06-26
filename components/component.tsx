/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/Dsbo5KHGOJd
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {
  ArrowUpIcon,
  CloudLightningIcon,
  FacebookIcon,
  FlameIcon,
  HeartIcon,
  HomeIcon,
  MapPinIcon,
  MessageCircleIcon,
  PanelTopCloseIcon,
  PersonStandingIcon,
  RefreshCwIcon,
  StarIcon,
  ThumbsDownIcon,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"

export function Component() {
  return (
    <div className="relative bg-black text-white p-4">
      <div className="flex items-center justify-between">
        <Badge variant="secondary">Active</Badge>
        <ArrowUpIcon className="text-white" />
      </div>
      <div className="mt-4">
        <h1 className="text-3xl font-bold">Angel 30</h1>
        <div className="flex items-center mt-1">
          <HomeIcon className="text-white mr-2" />
          <span>Lives in Costa Mesa</span>
        </div>
        <div className="flex items-center mt-1">
          <MapPinIcon className="text-white mr-2" />
          <span>38 miles away</span>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 flex justify-between items-center p-4 bg-gradient-to-t from-black to-transparent">
        <FlameIcon className="text-red-500" />
        <ThumbsDownIcon className="text-red-500" />
        <FacebookIcon className="text-green-500" />
        <StarIcon className="text-blue-500" />
        <CloudLightningIcon className="text-purple-500" />
      </div>
      <div className="absolute inset-x-0 bottom-14 flex justify-around">
        <RefreshCwIcon className="text-gray-500" />
        <PanelTopCloseIcon className="text-red-500" />
        <StarIcon className="text-blue-500" />
        <HeartIcon className="text-green-500" />
        <CloudLightningIcon className="text-purple-500" />
      </div>
      <div className="absolute inset-x-0 bottom-4 flex justify-between px-10">
        <FlameIcon className="text-gray-500" />
        <div className="relative">
          <MessageCircleIcon className="text-gray-500" />
          <span className="absolute -top-2 -right-2 bg-yellow-500 text-black rounded-full px-2 text-xs">
            9
          </span>
        </div>
        <PersonStandingIcon className="text-gray-500" />
      </div>
    </div>
  )
}
