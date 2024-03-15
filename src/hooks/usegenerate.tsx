import { useContext } from "react";
import { JsonContext } from "../context/json-context";

export function useGenerate() {
  const value = useContext(JsonContext)
  return value 
}