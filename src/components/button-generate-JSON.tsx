import { Code } from "@phosphor-icons/react";
import { useGenerate } from "../hooks/usegenerate";
import { useEditor } from "@craftjs/core";
import lz from "lzutf8";

export function ButtonGenerateJSON() {
  const { setJsonText, setOpenJSONText, setJsonTextBackup } = useGenerate()

  const { query } = useEditor((state) => ({
    enabled: state.options.enabled,
  }))

  function handleGenerateJSONForm() {
    const json = lz.encodeBase64(lz.compress(query.serialize()))

    setJsonText(json)
    setJsonTextBackup(lz.decompress(lz.decodeBase64(json)))
    setOpenJSONText(true)
  }

  return (
    <button 
      type="button"
      onClick={handleGenerateJSONForm}
      className="flex h-full bg-orange-500 hover:bg-orange-600 duration-150 rounded-full"
    >
      <span className="h-full text-zinc-50 flex items-center border-r-2 border-zinc-200 px-3">
        <Code size={24} />
      </span>
      <span className="h-full flex items-center justify-center text-zinc-50 px-3">
        Gerar Json do formulário
      </span>
    </button>
  );
}
