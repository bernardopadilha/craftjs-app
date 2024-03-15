import { useNode } from "@craftjs/core";
import { ReactNode } from "react";

interface ContainerProps {
  children?: ReactNode
}

export function ContainerComponent({ children }: ContainerProps) {
  const { connectors: {connect, drag} }: any = useNode();

  return (
    <div 
      ref={ref => connect(drag(ref))}
      className="bg-zinc-200 w-full rounded-lg p-10 text-gray-500 flex flex-col gap-4 justify-center"
    >
      {children}
    </div>
  )
  }