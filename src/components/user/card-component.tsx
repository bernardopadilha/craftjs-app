import { useNode } from "@craftjs/core";
import { ReactNode } from "react"

interface CardProps {
  children?: ReactNode
}

export function CardComponent({children}: CardProps) {
  const { connectors: {connect, drag} }: any = useNode();

  return (
    <div 
      ref={ref => connect(drag(ref))} 
      className="flex flex-col gap-3  justify-center bg-white py-8 px-5 rounded-lg "
    >
      {children}
    </div>
  )
}


export const ContainerSettings = () => {
  const {
    actions: { setProp },
  } = useNode();
};


CardComponent.craft = {
  related: {
    settings: ContainerSettings,
  },
};