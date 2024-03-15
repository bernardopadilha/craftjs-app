import { useState } from "react";

import { CardComponent } from "./components/user/card-component";
import { useGenerate } from "./hooks/usegenerate";
import { Editor, Element, Frame } from "@craftjs/core";
import { ContainerComponent } from "./components/user/container-component";
import { MovingButton } from "./components/moving-button";
import { TextComponent } from "./components/user/text-component";

import { toast } from "react-hot-toast";

import {
  Copy,
  GearFine,
  GithubLogo,
  ListPlus,
  Table,
} from "@phosphor-icons/react";
import { ButtonGenerateJSON } from "./components/button-generate-JSON";

import logo from "../public/logo.png";
import { MenuSettings } from "./components/menu-settings";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
} from "./components/ui/dialog";
import { TextareaComponent } from "./components/user/textarea-component";
import { ButtonComponent } from "./components/user/button-component";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const { openJSONText, jsonTextBackup } = useGenerate();
  const [openModalPreview, setOpenModalPreview] = useState(true);

  function handleToggleModalPreview() {
    openModalPreview ? setOpenModalPreview(false) : setOpenModalPreview(true);
  }

  function handleCopyJSONText() {
    navigator.clipboard.writeText(jsonTextBackup);
    toast.success("texto copiado com sucesso!");
  }

  function handleOpenAndCloseModal() {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  }

  return (
    <>
      <div className="w-full  min-h-screen px-14 flex flex-col gap-6 items-center bg-[#4460AF]">
        <Editor
          resolver={{
            CardComponent,
            TextComponent,
            ButtonComponent,
            TextareaComponent,
            ContainerComponent,
          }}
        >
          <div className="flex flex-col items-center mt-12 space-y-8">
            <img src={logo} className="w-28" />

            <div className="flex flex-col items-center space-y-4">
              <h1 className="text-3xl font-bold text-white">
                Builder de formulário
              </h1>
              <p className="text-white font-medium text-center">
                Essa aplicação foi criada com o objetivo de mostrar um <br />{" "}
                exemplo de como funciona a biblioteca{" "}
                <a
                  href="https://craft.js.org/"
                  className="text-amber-400 hover:underline"
                >
                  CraftJS
                </a>
              </p>

              <a
                href="https://github.com/bernardopadilha"
                className="flex items-center justify-center gap-2 bg-[#494949] text-white p-3 rounded-full hover:bg-[#3b3b3b] duration-150"
              >
                <GithubLogo size={30} />
                Repositório GitHub
              </a>
            </div>
          </div>

          <div className="flex w-full max-w-7xl items-center gap-6 bg-white p-5 text-zinc-50 rounded-md">
            <div className="w-2/5 bg-zinc-200 rounded-md p-5">
              <h1 className=" font-medium text-2xl text-zinc-600 mb-3">
                Tipos de compras
              </h1>
              <span className="text-zinc-400">
                Clique ou arraste os campos para <br /> construir o seu
                formulário
              </span>

              <div className="flex flex-col justify-center gap-3 mt-5">
                <MovingButton
                  name="Container"
                  icon={<ListPlus />}
                  elementCreate={<Element is={CardComponent} canvas />}
                />
                <MovingButton
                  name="Texto curto"
                  icon={<ListPlus />}
                  elementCreate={<Element is={TextComponent} canvas />}
                />
                <MovingButton
                  name="Texto longo"
                  icon={<ListPlus />}
                  elementCreate={<Element is={TextareaComponent} canvas />}
                />
                <MovingButton
                  name="Botão"
                  icon={<ListPlus />}
                  elementCreate={<Element is={ButtonComponent} canvas />}
                />
              </div>
            </div>

            <div className="w-full">
              <Frame>
                <Element is={ContainerComponent} canvas>
                  <CardComponent>
                    <TextComponent />
                    <TextareaComponent />
                    <ButtonComponent />
                  </CardComponent>
                </Element>
              </Frame>
            </div>
          </div>

          <div className="h-12 flex items-center gap-4 justify-end w-full max-w-7xl mb-10">
            <ButtonGenerateJSON />

            <button
              onClick={handleOpenAndCloseModal}
              className="flex h-full bg-zinc-600 hover:bg-zinc-700 duration-150 rounded-full"
            >
              <span className="h-full text-zinc-50 flex items-center border-r-2 border-zinc-300 px-3">
                <GearFine size={24} />
              </span>
              <span className="h-full flex items-center justify-center text-zinc-50 px-3">
                Configurar Propriedades
              </span>
            </button>

            <Dialog>
              {jsonTextBackup === "" ? (
                ""
              ) : (
                <DialogTrigger asChild>
                  <button
                    onClick={handleToggleModalPreview}
                    className="flex h-full bg-zinc-600 hover:bg-zinc-700 duration-150 rounded-full"
                  >
                    <span className="h-full text-zinc-50 flex items-center border-r-2 border-zinc-300 px-3">
                      <Table size={24} />
                    </span>
                    <span className="h-full flex items-center justify-center text-zinc-50 px-3">
                      Criar form a partir de um json
                    </span>
                  </button>
                </DialogTrigger>
              )}
              <DialogContent>
                <DialogHeader>
                  <DialogTitle asChild>
                    <h1 className="text-orange-500">
                      Form gerado a partir de um JSON
                    </h1>
                  </DialogTitle>
                </DialogHeader>

                <Frame json={jsonTextBackup}>
                  <Element is={ContainerComponent} canvas></Element>
                </Frame>
              </DialogContent>
            </Dialog>
          </div>
          {isOpen && <MenuSettings onToggleModal={handleOpenAndCloseModal} />}
        </Editor>

        {openJSONText && (
          <section className="mt-10 w-full max-w-5xl mb-10">
            <div className="w-full relative p-5 rounded-lg bg-white">
              <button
                className="absolute right-2 top-2 text-white bg-orange-500 w-8 h-8 rounded-md flex items-center justify-center hover:brightness-90 transition-all"
                type="button"
                title="Clique para copiar o JSON"
                onClick={handleCopyJSONText}
              >
                <Copy size={20} />
              </button>
              <p className="text-gray-500 text-sm font-light select-none">
                {jsonTextBackup}
              </p>
            </div>
          </section>
        )}
      </div>
    </>
  );
}
