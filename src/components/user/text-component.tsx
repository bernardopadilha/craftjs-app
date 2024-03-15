import { useNode } from "@craftjs/core";

export const TextComponent = () => {
  const { connectors: {connect, drag} }: any = useNode();

  return (
    <div
      ref={ref => connect(drag(ref))} 
      className="flex flex-col gap-2"
    >
      <label>Texto Curto</label>
      <input type="text" placeholder="Digite um texto curto" className="border-2 border-zinc-400 rounded-md p-2 w-full" />
    </div>
  );
};

const InputMallSettings = () => {
  
};

TextComponent.craft = {
  related: {
    settings: InputMallSettings,
  },
};