import { useEditor } from "@craftjs/core"
import { ReactNode } from "react"
// import { useNode } from "@craftjs/core"

interface MovingButtonProps {
  name: string,
  icon: ReactNode,
  elementCreate: ReactNode,
}

export function MovingButton({ name, icon, elementCreate }: MovingButtonProps) {
  const { connectors }: any = useEditor()
  
  return (
    <button 
      title="name"
      ref={ref => connectors.create(ref, elementCreate)}
      className="w-full bg-[#757575] text-zinc-50 rounded-md flex items-center justify-start gap-3 px-4 py-2 hover:bg-[#616060] duration-150"
    >
      {icon}
      {name}
    </button>
  )
}