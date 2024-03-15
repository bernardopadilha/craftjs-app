import { useNode } from "@craftjs/core";

export function ButtonComponent() {
  const { connectors: {connect, drag} }: any = useNode();

  return (
    <div
      ref={ref => connect(drag(ref))} 
      className="flex gap-2"
    >
      <button className="bg-green-500 text-white font-medium px-5 py-2 rounded-sm ">
        Enviar
      </button>
    </div>
  );
};

const ButtonSettings = () => {
  
};

ButtonComponent.craft = {
  related: {
    settings: ButtonSettings,
  },
};
