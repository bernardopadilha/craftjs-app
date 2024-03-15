import { Dispatch, ReactNode, createContext, useState } from "react"

interface JsonContextData {
  openJSONText: boolean;
  jsonText: string;
  setJsonText: Dispatch<string>;
  setOpenJSONText: Dispatch<boolean>;
  setJsonLoad: Dispatch<string>;
  jsonLoad: string;
  setJsonTextBackup: Dispatch<string>;
  jsonTextBackup: string;
}

interface JsonProviderProps {
  children: ReactNode;
}

export const JsonContext = createContext({} as JsonContextData)

export function JsonProvider({ children }: JsonProviderProps) {
  const [openJSONText, setOpenJSONText] = useState(false);

  const [jsonText, setJsonText] = useState("");
  const [jsonLoad, setJsonLoad] = useState("");
  const [jsonTextBackup, setJsonTextBackup] = useState("");
  
  return (
    <JsonContext.Provider
    value={{
      openJSONText,
      jsonText,
      setJsonText,
      setOpenJSONText,
      setJsonLoad,
      jsonLoad,
      setJsonTextBackup,
      jsonTextBackup,
    }}
    >
      {children}
    </JsonContext.Provider>
  )
}