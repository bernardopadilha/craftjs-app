import { useEditor } from "@craftjs/core";
import { X } from "@phosphor-icons/react";
import React from "react";

interface MenuSettingsProps {
  onToggleModal: () => void
}

export function MenuSettings({ onToggleModal }: MenuSettingsProps) {
  const { actions, selected } = useEditor((state, query) => {
    const currentNodeId = query.getEvent("selected").last();
    let selected;

    if (currentNodeId) {
      selected = {
        id: currentNodeId,
        name: state.nodes[currentNodeId].data.name,
        settings:
          state.nodes[currentNodeId].related &&
          state.nodes[currentNodeId].related.settings,
        isDeletable: query.node(currentNodeId).isDeletable(),
      };
    }

    return {
      selected,
      isEnabled: state.options.enabled,
    };
  });

  function handleDeleteComponent() {
    actions.delete(selected?.id);
    onToggleModal();
  }

  return(
    <>
      <button
        type="button"
        className="w-full cursor-default h-screen bg-gray-800/50 fixed left-0 top-0 z-40"
        onClick={onToggleModal}
      />
      <aside className="fixed left-0 top-0 w-full max-w-[350px] h-screen bg-gray-700 z-50 border-l border-white/20 p-6">
        <div className="flex justify-end">
          <button
            type="button"
            title="Clique para fechar o modal"
            className="bg-red-500 w-7 h-7 flex items-center justify-center rounded-full hover:brightness-90 transition-all"
            onClick={onToggleModal}
          >
            <X size={24} color="#fff"/>
          </button>
        </div>

        <div className="mt-4">
          <h1 className="text-xl font-medium text-zinc-50">Edição de propriedades</h1>
          <p className="font-light text-sm text-zinc-200 opacity-70 mt-1">
            Modifique as propriedades dos seus componentes para se encaixar da
            no seu formulário!
          </p>
        </div>
        <div className="mt-6 ">
          <span className="bg-emerald-500 flex justify-center text-white rounded-full px-2 py-1 truncate text-sm">
            Campo {selected?.name} selecionado
          </span>
        </div>

        <div className="mt-6 flex flex-col gap-5 text-sm">
          <div data-cy="settings-panel" className="text-zinc-50 font-medium text-base">
            {selected?.settings && React.createElement(selected.settings)}
          </div>

          <button
            title="Clique para deletar o componente"
            className="bg-red-500 text-zinc-50 h-10 rounded-full hover:brightness-90 transition-all"
            type="button"
            onClick={handleDeleteComponent}
          >
            Deletar componente
          </button>
        </div>
      </aside>

    </>
  )
}