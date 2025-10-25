import { Badge } from "@/components/ui/badge"
import { IceCreamCone } from "lucide-react"
import React, { ReactNode } from "react"

interface BadgeButtonProps {
  children: ReactNode
}

const BadgeButton: React.FC<BadgeButtonProps> = () => {
  return (
    <Badge
      variant="outline"
      className="mb-3 cursor-pointer rounded-[14px] border border-black/10 bg-white text-base md:left-6"
    >
      <IceCreamCone className="fill-[#9ff01d] stroke-1 text-neutral-800" />{" "}
      
    </Badge>
  )
}

export default BadgeButton