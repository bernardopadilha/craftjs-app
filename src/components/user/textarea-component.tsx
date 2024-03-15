import { useNode } from "@craftjs/core";

export function TextareaComponent() {
  const { connectors: {connect, drag} }: any = useNode();

  return (
    <div
      ref={ref => connect(drag(ref))} 
      className="flex flex-col gap-2"
    >
      <label>Texto Longo</label>
      <textarea placeholder="Digite um texto curto" className="border-2 border-zinc-400 rounded-md p-2 w-full resize-none" />
    </div>
  );
};

const TextareaMallSettings = () => {
  
};

TextareaComponent.craft = {
  related: {
    settings: TextareaMallSettings,
  },
};
